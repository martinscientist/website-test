'use client'

import { ArrowDown, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { GravityField } from '@/components/visuals/gravity-field'

export function Hero() {
  const pointer = useRef({ x: 0, y: 0, active: false })

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    pointer.current.x = event.clientX - rect.left
    pointer.current.y = event.clientY - rect.top
    pointer.current.active = true
  }

  return (
    <section
      id="top"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => (pointer.current.active = false)}
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#07090f]"
    >
      <GravityField pointer={pointer} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:bg-gradient-to-r md:from-background md:via-background/40 md:to-transparent"
      />

      <div className="pointer-events-none relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pt-32 pb-12 md:justify-center md:px-8 md:pb-24">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
          School of Physics, Complexity &amp; Cosmos
        </p>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-7xl">
          양자에서 은하까지,
          <br />
          <span className="text-muted-foreground">하나의 언어로</span> 우주를 읽다.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          세레스대학교 물리·복잡계·우주과학부는 기본 입자의 대칭성부터 생명과 사회의 창발 현상,
          그리고 우주의 기원까지 — 서로 다른 척도의 질문을 같은 수학으로 탐구합니다.
        </p>

        <div className="pointer-events-auto mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#research"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            연구 분야 살펴보기
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#admissions"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            2027학년도 입학 안내
          </a>
        </div>
      </div>

      <div className="pointer-events-none relative mx-auto hidden w-full max-w-7xl items-end justify-between px-8 pb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground md:flex">
        <dl className="flex gap-10">
          <div>
            <dt className="text-foreground/40">Lat</dt>
            <dd>36°22′N</dd>
          </div>
          <div>
            <dt className="text-foreground/40">Lon</dt>
            <dd>127°21′E</dd>
          </div>
          <div>
            <dt className="text-foreground/40">Est.</dt>
            <dd>1987</dd>
          </div>
        </dl>
        <p className="flex items-center gap-2">
          커서를 움직여 질량을 더해보세요
          <ArrowDown className="size-3.5" aria-hidden="true" />
        </p>
      </div>
    </section>
  )
}
