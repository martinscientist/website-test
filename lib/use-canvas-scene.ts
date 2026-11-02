'use client'

import { useEffect, useRef } from 'react'

export type CanvasScene = {
  resize?: (width: number, height: number) => void
  frame: (ctx: CanvasRenderingContext2D, width: number, height: number, time: number, dt: number) => void
}

/**
 * Runs a canvas animation that respects device pixel ratio, pauses when
 * offscreen, and renders a settled still frame for reduced-motion users.
 */
export function useCanvasScene(createScene: () => CanvasScene) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const factoryRef = useRef(createScene)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const scene = factoryRef.current()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let raf = 0
    let visible = true
    let last = performance.now()
    let time = 0

    const renderStill = () => {
      for (let i = 0; i < 240; i++) {
        time += 1 / 60
        scene.frame(ctx, width, height, time, 1 / 60)
      }
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.max(1, Math.round(width * dpr))
      canvas.height = Math.max(1, Math.round(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      scene.resize?.(width, height)
      if (reduceMotion) renderStill()
    }

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      time += dt
      scene.frame(ctx, width, height, time, dt)
      raf = visible ? requestAnimationFrame(loop) : 0
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    resize()

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !raf && !reduceMotion) {
        last = performance.now()
        raf = requestAnimationFrame(loop)
      }
    })
    intersectionObserver.observe(canvas)

    if (!reduceMotion) raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
    }
  }, [])

  return canvasRef
}
