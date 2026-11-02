'use client'

import { useCanvasScene } from '@/lib/use-canvas-scene'

const CELL = 4

export function WaveInterference() {
  const canvasRef = useCanvasScene(() => {
    const buffer = document.createElement('canvas')
    const bctx = buffer.getContext('2d')
    let image: ImageData | null = null
    let cols = 0
    let rows = 0

    return {
      resize(w, h) {
        cols = Math.max(1, Math.ceil(w / CELL))
        rows = Math.max(1, Math.ceil(h / CELL))
        buffer.width = cols
        buffer.height = rows
        image = bctx?.createImageData(cols, rows) ?? null
      },
      frame(ctx, w, h, time) {
        if (!bctx || !image) return
        const sep = cols * 0.18 + Math.sin(time * 0.4) * cols * 0.04
        const s1x = cols / 2 - sep
        const s2x = cols / 2 + sep
        const sy = rows * 0.15
        const k = 0.55
        const omega = 3.2
        const data = image.data

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const r1 = Math.hypot(x - s1x, y - sy)
            const r2 = Math.hypot(x - s2x, y - sy)
            const amp = (Math.sin(k * r1 - omega * time) + Math.sin(k * r2 - omega * time)) / 2
            const intensity = amp * amp
            const idx = (y * cols + x) * 4
            data[idx] = 10 + intensity * 235
            data[idx + 1] = 12 + intensity * 175
            data[idx + 2] = 22 + intensity * 90
            data[idx + 3] = 255
          }
        }
        bctx.putImageData(image, 0, 0)
        ctx.imageSmoothingEnabled = true
        ctx.drawImage(buffer, 0, 0, w, h)
      },
    }
  })

  return <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" />
}
