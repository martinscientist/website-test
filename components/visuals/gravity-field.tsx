'use client'

import { useCanvasScene } from '@/lib/use-canvas-scene'

type Pointer = { x: number; y: number; active: boolean }

const BACKGROUND = 'rgba(7, 9, 15, 0.16)'
const GM = 520
const POINTER_GM = 320
const SOFTENING = 600

export function GravityField({ pointer }: { pointer: React.RefObject<Pointer> }) {
  const canvasRef = useCanvasScene(() => {
    let count = 0
    let px = new Float32Array(0)
    let py = new Float32Array(0)
    let vx = new Float32Array(0)
    let vy = new Float32Array(0)
    let cx = 0
    let cy = 0
    let maxR = 0

    const spawn = (i: number) => {
      const r = 40 + Math.pow(Math.random(), 0.7) * maxR
      const a = Math.random() * Math.PI * 2
      px[i] = cx + Math.cos(a) * r
      py[i] = cy + Math.sin(a) * r * 0.62
      const v = Math.sqrt(GM / r) * (0.85 + Math.random() * 0.25)
      vx[i] = -Math.sin(a) * v
      vy[i] = Math.cos(a) * v * 0.62
    }

    return {
      resize(w, h) {
        const mobile = w < 768
        cx = mobile ? w * 0.5 : w * 0.7
        cy = mobile ? h * 0.32 : h * 0.5
        maxR = Math.min(Math.max(w, h) * 0.55, 720)
        count = mobile ? 420 : 1100
        px = new Float32Array(count)
        py = new Float32Array(count)
        vx = new Float32Array(count)
        vy = new Float32Array(count)
        for (let i = 0; i < count; i++) spawn(i)
      },
      frame(ctx, w, h, time, dt) {
        const step = dt * 60
        ctx.fillStyle = BACKGROUND
        ctx.fillRect(0, 0, w, h)

        ctx.strokeStyle = 'rgba(240, 200, 140, 0.025)'
        ctx.lineWidth = 1
        for (let k = 1; k <= 5; k++) {
          ctx.beginPath()
          ctx.ellipse(cx, cy, k * 90, k * 90 * 0.62, 0, 0, Math.PI * 2)
          ctx.stroke()
        }

        const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 70)
        glow.addColorStop(0, 'rgba(255, 214, 150, 0.35)')
        glow.addColorStop(0.3, 'rgba(255, 170, 80, 0.08)')
        glow.addColorStop(1, 'rgba(255, 170, 80, 0)')
        ctx.fillStyle = glow
        ctx.fillRect(cx - 70, cy - 70, 140, 140)

        const p = pointer.current
        const usePointer = p.active

        for (let i = 0; i < count; i++) {
          let dx = cx - px[i]
          let dy = cy - py[i]
          let d2 = dx * dx + dy * dy
          const dist = Math.sqrt(d2)
          const soft = d2 + SOFTENING
          let inv = GM / (soft * Math.sqrt(soft))
          let ax = dx * inv
          let ay = dy * inv

          if (usePointer) {
            dx = p.x - px[i]
            dy = p.y - py[i]
            d2 = dx * dx + dy * dy + SOFTENING
            inv = POINTER_GM / (d2 * Math.sqrt(d2))
            ax += dx * inv
            ay += dy * inv
          }

          vx[i] += ax * step
          vy[i] += ay * step
          px[i] += vx[i] * step
          py[i] += vy[i] * step

          if (dist < 10 || dist > maxR * 1.7) {
            spawn(i)
            continue
          }

          const speed = Math.min(Math.hypot(vx[i], vy[i]) / 3.2, 1)
          const r = Math.round(150 + speed * 105)
          const g = Math.round(180 + speed * 30)
          const b = Math.round(230 - speed * 110)
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.55 + speed * 0.45})`
          ctx.fillRect(px[i], py[i], 1.3, 1.3)
        }

        if (usePointer) {
          const pulse = 6 + Math.sin(time * 4) * 2
          ctx.strokeStyle = 'rgba(140, 200, 240, 0.35)'
          ctx.beginPath()
          ctx.arc(p.x, p.y, pulse, 0, Math.PI * 2)
          ctx.stroke()
        }
      },
    }
  })

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />
}
