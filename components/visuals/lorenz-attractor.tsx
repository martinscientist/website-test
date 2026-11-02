'use client'

import { useCanvasScene } from '@/lib/use-canvas-scene'

const SIGMA = 10
const RHO = 28
const BETA = 8 / 3
const TRAIL = 2600

export function LorenzAttractor() {
  const canvasRef = useCanvasScene(() => {
    const xs = new Float32Array(TRAIL)
    const ys = new Float32Array(TRAIL)
    const zs = new Float32Array(TRAIL)
    let head = 0
    let filled = 0
    let x = 0.1
    let y = 0
    let z = 0

    const advance = (h: number) => {
      const dx = SIGMA * (y - x)
      const dy = x * (RHO - z) - y
      const dz = x * y - BETA * z
      x += dx * h
      y += dy * h
      z += dz * h
      xs[head] = x
      ys[head] = y
      zs[head] = z
      head = (head + 1) % TRAIL
      filled = Math.min(filled + 1, TRAIL)
    }

    for (let i = 0; i < 1800; i++) advance(0.005)

    return {
      frame(ctx, w, h, time) {
        for (let i = 0; i < 6; i++) advance(0.005)

        ctx.fillStyle = 'rgb(10, 12, 20)'
        ctx.fillRect(0, 0, w, h)

        const angle = time * 0.18
        const cos = Math.cos(angle)
        const sin = Math.sin(angle)
        const scale = Math.min(w, h) / 58
        const ox = w / 2
        const oy = h / 2 + scale * 25

        ctx.lineWidth = 0.9
        const start = (head - filled + TRAIL) % TRAIL
        let prevX = 0
        let prevY = 0
        for (let n = 0; n < filled; n++) {
          const i = (start + n) % TRAIL
          const sx = ox + (xs[i] * cos - ys[i] * sin) * scale
          const sy = oy - zs[i] * scale
          if (n > 0) {
            const t = n / filled
            ctx.strokeStyle = `rgba(${Math.round(120 + t * 60)}, ${Math.round(190 + t * 30)}, 240, ${t * 0.85})`
            ctx.beginPath()
            ctx.moveTo(prevX, prevY)
            ctx.lineTo(sx, sy)
            ctx.stroke()
          }
          prevX = sx
          prevY = sy
        }

        ctx.fillStyle = 'rgb(255, 214, 150)'
        ctx.beginPath()
        ctx.arc(prevX, prevY, 2.4, 0, Math.PI * 2)
        ctx.fill()
      },
    }
  })

  return <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" />
}
