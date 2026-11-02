import { ArrowUpRight } from 'lucide-react'

const ITEMS = [
  {
    date: '2026.11.14',
    type: '공개강연',
    title: '블랙홀의 그림자를 찍는 법 — 사건지평선망원경 10년',
    place: '세레스홀 대강당',
  },
  {
    date: '2026.11.21',
    type: '콜로키움',
    title: '임계점의 보편성: 자석, 산불, 그리고 뉴런의 눈사태',
    place: '자연과학관 301호',
  },
  {
    date: '2026.11.29',
    type: '공개관측',
    title: '천문대 공개관측의 밤 — 토성의 고리와 오리온 성운',
    place: '세레스 천문대',
  },
  {
    date: '2026.12.05',
    type: '연구성과',
    title: '학부 연구팀, 쌍성계 주위 외계행성 후보 3개 발견',
    place: 'Astrophysical Journal Letters',
  },
]

export function News() {
  return (
    <section id="news" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">05 — News &amp; Events</p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          관측 일지
        </h2>

        <ul className="mt-14 border-t border-border">
          {ITEMS.map((item) => (
            <li key={item.title}>
              <a
                href="#news"
                className="group grid grid-cols-1 gap-2 border-b border-border py-6 transition-colors hover:bg-foreground/[0.02] md:grid-cols-12 md:items-center md:gap-6"
              >
                <time
                  dateTime={item.date.replaceAll('.', '-')}
                  className="font-mono text-xs text-muted-foreground md:col-span-2"
                >
                  {item.date}
                </time>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary md:col-span-2">
                  {item.type}
                </span>
                <span className="text-pretty text-lg text-foreground md:col-span-5">{item.title}</span>
                <span className="flex items-center justify-between text-sm text-muted-foreground md:col-span-3">
                  {item.place}
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
