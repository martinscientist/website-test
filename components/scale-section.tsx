const SCALES = [
  { exp: -35, label: '플랑크 길이', note: '양자중력' },
  { exp: -15, label: '양성자', note: '입자물리' },
  { exp: -9, label: '분자', note: '응집물질' },
  { exp: 0, label: '인간', note: '복잡계' },
  { exp: 7, label: '지구', note: '행성과학' },
  { exp: 21, label: '은하', note: '천체물리' },
  { exp: 26, label: '관측 가능한 우주', note: '우주론' },
]

const MIN = -35
const MAX = 26

function toPercent(exp: number) {
  return ((exp - MIN) / (MAX - MIN)) * 100
}

export function ScaleSection() {
  return (
    <section id="about" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">01 — About</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              61자릿수의 척도,
              <br />
              하나의 학부.
            </h2>
          </div>
          <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6 md:text-lg">
            <p>
              우리는 물리학을 분야가 아닌 <span className="text-foreground">사고의 방식</span>으로 가르칩니다.
              양성자 안의 쿼크, 뇌 속의 신경망, 수천억 개의 별로 이루어진 은하는 서로 달라 보이지만 대칭성,
              통계, 그리고 비선형 동역학이라는 같은 원리 위에 서 있습니다.
            </p>
            <p>
              1학년은 공통 기초를 함께 다지고, 3학년부터 이론·응집물리, 복잡계 과학, 천체·우주론 세 트랙 중
              하나를 선택합니다. 트랙 사이의 경계는 언제든 넘나들 수 있습니다.
            </p>
          </div>
        </div>

        <figure className="mt-20">
          <figcaption className="mb-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            <span>Length scale (m)</span>
            <span>
              log<sub>10</sub>
            </span>
          </figcaption>

          <div className="relative mx-6 h-40 md:mx-12 md:h-32">
            <div
              className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-signal via-foreground/60 to-primary"
              aria-hidden="true"
            />
            <ol className="absolute inset-0">
              {SCALES.map((scale, index) => (
                <li
                  key={scale.exp}
                  className="absolute top-1/2 -translate-x-1/2"
                  style={{ left: `${toPercent(scale.exp)}%` }}
                >
                  <span className="absolute left-1/2 top-0 block size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground bg-background" />
                  <span
                    className={`absolute left-1/2 flex -translate-x-1/2 flex-col items-center whitespace-nowrap text-center ${
                      index % 2 === 0 ? 'bottom-4' : 'top-4'
                    }`}
                  >
                    <span className="font-mono text-xs text-foreground">
                      10<sup>{scale.exp}</sup>
                    </span>
                    <span className="mt-1 hidden text-xs text-muted-foreground sm:block">{scale.label}</span>
                    <span className="hidden font-mono text-[10px] uppercase tracking-wider text-primary/80 lg:block">
                      {scale.note}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </figure>
      </div>
    </section>
  )
}
