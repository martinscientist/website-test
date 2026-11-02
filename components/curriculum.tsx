'use client'

import { useState } from 'react'

const YEARS = [
  {
    year: '1학년',
    theme: '공통 기초',
    summary: '모든 학생이 같은 출발선에서 물리학의 언어인 미적분과 역학을 익힙니다.',
    courses: [
      { code: 'PCC101', name: '일반물리학 I · II', credit: 6 },
      { code: 'PCC110', name: '물리를 위한 미적분과 선형대수', credit: 6 },
      { code: 'PCC120', name: '파이썬 과학 계산 입문', credit: 3 },
      { code: 'PCC130', name: '우주와 복잡성 세미나', credit: 1 },
    ],
  },
  {
    year: '2학년',
    theme: '핵심 이론',
    summary: '고전역학, 전자기학, 양자역학의 세 기둥을 세우고 실험 방법론을 배웁니다.',
    courses: [
      { code: 'PCC201', name: '해석역학', credit: 3 },
      { code: 'PCC210', name: '전자기학', credit: 3 },
      { code: 'PCC220', name: '양자역학 I', credit: 3 },
      { code: 'PCC230', name: '열·통계물리', credit: 3 },
      { code: 'PCC240', name: '현대물리 실험', credit: 2 },
    ],
  },
  {
    year: '3학년',
    theme: '트랙 선택',
    summary: '이론·응집물리, 복잡계 과학, 천체·우주론 중 하나를 선택해 심화합니다.',
    courses: [
      { code: 'TRA310', name: '고체물리 · 양자정보', credit: 3 },
      { code: 'TRB310', name: '비선형 동역학과 카오스', credit: 3 },
      { code: 'TRB320', name: '네트워크 과학', credit: 3 },
      { code: 'TRC310', name: '천체물리학 개론', credit: 3 },
      { code: 'TRC320', name: '관측천문학 실습 (천문대)', credit: 2 },
    ],
  },
  {
    year: '4학년',
    theme: '연구 참여',
    summary: '연구실에 소속되어 학위 논문을 쓰고, 국제 학회에서 발표할 기회를 얻습니다.',
    courses: [
      { code: 'PCC401', name: '학부 연구 (졸업논문)', credit: 6 },
      { code: 'TRA410', name: '양자장론 입문', credit: 3 },
      { code: 'TRB410', name: '복잡계 데이터 과학', credit: 3 },
      { code: 'TRC410', name: '일반상대론과 우주론', credit: 3 },
    ],
  },
]

export function Curriculum() {
  const [active, setActive] = useState(0)
  const current = YEARS[active]

  return (
    <section id="curriculum" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">04 — Curriculum</p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          4년의 궤도
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div role="tablist" aria-label="학년 선택" className="flex gap-2 overflow-x-auto lg:col-span-4 lg:flex-col">
            {YEARS.map((item, index) => {
              const selected = index === active
              return (
                <button
                  key={item.year}
                  type="button"
                  role="tab"
                  id={`year-tab-${index}`}
                  aria-selected={selected}
                  aria-controls="year-panel"
                  onClick={() => setActive(index)}
                  className={`flex shrink-0 items-center gap-4 rounded-sm border px-4 py-3 text-left transition-colors lg:px-5 lg:py-4 ${
                    selected
                      ? 'border-primary/60 bg-primary/10 text-foreground'
                      : 'border-border text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="font-mono text-xs text-primary">{`0${index + 1}`}</span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium">{item.year}</span>
                    <span className="hidden text-xs text-muted-foreground lg:block">{item.theme}</span>
                  </span>
                </button>
              )
            })}
          </div>

          <div
            id="year-panel"
            role="tabpanel"
            aria-labelledby={`year-tab-${active}`}
            className="lg:col-span-8"
          >
            <p className="text-xl font-medium">{current.theme}</p>
            <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{current.summary}</p>

            <table className="mt-8 w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  <th scope="col" className="py-3 pr-4 font-normal">Code</th>
                  <th scope="col" className="py-3 pr-4 font-normal">교과목</th>
                  <th scope="col" className="py-3 text-right font-normal">학점</th>
                </tr>
              </thead>
              <tbody>
                {current.courses.map((course) => (
                  <tr key={course.code} className="border-b border-border">
                    <td className="py-4 pr-4 font-mono text-xs text-primary">{course.code}</td>
                    <td className="py-4 pr-4 text-foreground">{course.name}</td>
                    <td className="py-4 text-right font-mono text-muted-foreground">{course.credit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
