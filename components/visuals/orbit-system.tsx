'use client'

import { useCanvasScene } from '@/lib/use-canvas-scene'

const BODIES = [
  { a: 0.16, e: 0.05, size: 1.6, phase: 0.4 },
  { a: 0.26, e: 0.12, size: 2.2, phase: 2.1 },
  { a: 0.37, e: 0.08, size: 3.0, phase: 4.0 },
  { a: 0.48, e: 0.22, size: 1.8, phase: 1.2 },
]

export function OrbitSystem() {
  const canvasRef = useCanvasScene(() => {
    let stars: { x: number; y: number; r: number; tw: number }[] = []

    return {
      resize(w, h) {
        stars = Array.from({ length: Math.round((w * h) / 900) }, () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 0.9 + 0.2,
          tw: Math.random() * Math.PI * 2,
        }))
      },
      frame(ctx, w, h, time) {
        ctx.fillStyle = 'rgb(8, 10, 18)'
        ctx.fillRect(0, 0, w, h)

        for (const s of stars) {
          const alpha = 0.25 + 0.35 * (0.5 + 0.5 * Math.sin(time * 1.5 + s.tw))
          ctx.fillStyle = `rgba(230, 230, 245, ${alpha})`
          ctx.fillRect(s.x, s.y, s.r, s.r)
        }

        const cx = w / 2
        const cy = h / 2
        const unit = Math.min(w, h * 1.6)
        const tilt = 0.42

        const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, unit * 0.09)
        glow.addColorStop(0, 'rgba(255, 230, 180, 1)')
        glow.addColorStop(0.25, 'rgba(255, 180, 90, 0.55)')
        glow.addColorStop(1, 'rgba(255, 150, 60, 0)')
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(cx, cy, unit * 0.09, 0, Math.PI * 2)
        ctx.fill()

        for (const body of BODIES) {
          const a = body.a * unit
          const b = a * Math.sqrt(1 - body.e * body.e)
          const focus = a * body.e

          ctx.strokeStyle = 'rgba(240, 210, 160, 0.16)'
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.ellipse(cx - focus, cy, a, b * tilt, 0, 0, Math.PI * 2)
          ctx.stroke()

          const period = Math.pow(body.a, 1.5) * 40
          const mean = (time / period) * Math.PI * 2 + body.phase
          let E = mean
          for (let k = 0; k < 4; k++) E = mean + body.e * Math.sin(E)
          const bx = cx - focus + a * Math.cos(E)
          const by = cy + b * tilt * Math.sin(E)

          ctx.fillStyle = 'rgb(236, 232, 222)'
          ctx.beginPath()
          ctx.arc(bx, by, body.size, 0, Math.PI * 2)
          ctx.fill()
        }
      },
    }
  })

  return <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" />
}
