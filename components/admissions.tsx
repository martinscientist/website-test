import { ArrowRight } from 'lucide-react'

const STEPS = [
  { label: '원서 접수', date: '2026.12.29 – 12.31' },
  { label: '심층 면접', date: '2027.01.15' },
  { label: '최종 발표', date: '2027.02.03' },
]

export function Admissions() {
  return (
    <section id="admissions" className="relative overflow-hidden border-b border-border py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 size-[640px] -translate-y-1/2 rounded-full border border-primary/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/2 size-[440px] -translate-y-1/2 rounded-full border border-primary/10"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">06 — Admissions</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            다음 질문은
            <br />
            당신이 던질 차례입니다.
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            2027학년도 정시 모집 인원 48명. 수학·물리에 대한 호기심과 끈기를 가장 중요하게 봅니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              모집요강 다운로드
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              학부 설명회 신청
            </a>
          </div>
        </div>

        <ol className="self-end border-l border-border">
          {STEPS.map((step, index) => (
            <li key={step.label} className="relative pb-10 pl-8 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1.5 size-2.5 rounded-full border border-primary bg-background"
              />
              <p className="font-mono text-xs text-muted-foreground">{`T+${index}`}</p>
              <p className="mt-1 text-lg font-medium">{step.label}</p>
              <p className="font-mono text-sm text-primary">{step.date}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
