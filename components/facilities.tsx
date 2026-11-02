import Image from 'next/image'

const FACILITIES = [
  {
    src: '/images/observatory.png',
    alt: '은하수 아래 돔이 열린 캠퍼스 천문대',
    name: '세레스 천문대',
    english: 'Ceres Observatory',
    detail: '해발 1,120m · 1.8m 리치-크레티앙 망원경 · 분광기 3기',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/quantum-lab.png',
    alt: '레이저 빔이 지나는 양자광학 실험 테이블',
    name: '양자물질·광학 연구동',
    english: 'Quantum Matter Lab',
    detail: '희석 냉동기 10mK · 초고속 레이저 분광',
    className: '',
  },
  {
    src: '/images/hpc-cluster.png',
    alt: '파란 상태 표시등이 켜진 고성능 컴퓨팅 서버 랙',
    name: '복잡계 계산센터',
    english: 'Complexity Computing Center',
    detail: 'GPU 512기 · 우주론 N-body 시뮬레이션',
    className: '',
  },
]

export function Facilities() {
  return (
    <section id="facilities" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">03 — Facilities</p>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          학부생도 직접 다루는 연구 인프라
        </h2>

        <ul className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {FACILITIES.map((facility) => (
            <li
              key={facility.name}
              className={`group relative min-h-72 overflow-hidden rounded-sm border border-border ${facility.className}`}
            >
              <Image
                src={facility.src || '/placeholder.svg'}
                alt={facility.alt}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{facility.english}</p>
                <h3 className="mt-2 text-xl font-semibold">{facility.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{facility.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
