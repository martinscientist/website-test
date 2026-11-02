const STATS = [
  { value: '1.8', unit: 'm', label: '캠퍼스 천문대 반사망원경 구경' },
  { value: '4.6', unit: 'PFLOPS', label: '복잡계·우주론 전용 HPC 클러스터' },
  { value: '42', unit: '명', label: '전임 교원 · 3개 트랙' },
  { value: '1:7', unit: '', label: '교원 대 학부생 비율' },
]

export function StatsBand() {
  return (
    <section aria-label="학부 주요 지표" className="border-b border-border">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-3 border-border px-5 py-10 md:px-8 md:py-14 ${
              index % 2 === 0 ? 'border-r' : 'lg:border-r'
            } ${index < 2 ? 'border-b lg:border-b-0' : ''} ${index === 3 ? 'lg:border-r-0' : ''}`}
          >
            <dt className="order-2 text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="order-1 flex items-baseline gap-1.5">
              <span className="text-4xl font-light tracking-tight md:text-6xl">{stat.value}</span>
              {stat.unit && <span className="font-mono text-sm text-primary">{stat.unit}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
