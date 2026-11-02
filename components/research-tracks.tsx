import { LorenzAttractor } from '@/components/visuals/lorenz-attractor'
import { OrbitSystem } from '@/components/visuals/orbit-system'
import { WaveInterference } from '@/components/visuals/wave-interference'

const TRACKS = [
  {
    code: 'TRK-A',
    title: '이론·응집물리',
    english: 'Theoretical & Condensed Matter',
    equation: 'iħ ∂ψ/∂t = Ĥψ',
    description:
      '양자장론, 위상물질, 초전도와 양자정보. 보이지 않는 파동함수가 어떻게 물질의 성질을 결정하는지 탐구합니다.',
    topics: ['양자장론', '위상 절연체', '양자 컴퓨팅', '강상관 전자계'],
    Visual: WaveInterference,
    caption: '이중 슬릿 간섭 패턴 — 실시간 시뮬레이션',
  },
  {
    code: 'TRK-B',
    title: '복잡계 과학',
    english: 'Complex Systems',
    equation: 'ẋ = σ(y − x)',
    description:
      '카오스, 네트워크, 통계역학으로 생명·뇌·도시·시장의 창발 현상을 모델링합니다. 단순한 규칙에서 복잡한 질서가 태어나는 순간을 연구합니다.',
    topics: ['비선형 동역학', '네트워크 과학', '생물물리', '계산 사회과학'],
    Visual: LorenzAttractor,
    caption: '로렌츠 어트랙터 — σ=10, ρ=28, β=8/3',
  },
  {
    code: 'TRK-C',
    title: '천체·우주론',
    english: 'Astrophysics & Cosmology',
    equation: 'Gμν + Λgμν = 8πG Tμν',
    description:
      '블랙홀, 중력파, 외계행성, 암흑물질과 우주배경복사. 자체 천문대와 국제 관측 협력망으로 우주의 역사를 재구성합니다.',
    topics: ['중력파 천문학', '외계행성', '은하 형성', '관측 우주론'],
    Visual: OrbitSystem,
    caption: '케플러 궤도 — 이심률 0.05 – 0.22',
  },
]

export function ResearchTracks() {
  return (
    <section id="research" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">02 — Research</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              세 개의 트랙, 하나의 질문
            </h2>
          </div>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            {'"세상은 왜 이런 모습인가?" 각 트랙은 이 질문에 서로 다른 척도에서 답합니다. 아래 시각화는 모두 브라우저에서 실시간으로 계산됩니다.'}
          </p>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-3">
          {TRACKS.map(({ Visual, ...track }) => (
            <li key={track.code} className="flex flex-col bg-background">
              <figure className="relative aspect-[4/3] overflow-hidden border-b border-border">
                <Visual />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background/90 to-transparent px-4 pt-8 pb-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  <span>{track.caption}</span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
                    Live
                  </span>
                </figcaption>
              </figure>

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span>{track.code}</span>
                  <span>{track.english}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{track.title}</h3>
                <p className="mt-3 font-mono text-sm text-primary">{track.equation}</p>
                <p className="mt-5 flex-1 text-pretty leading-relaxed text-muted-foreground">{track.description}</p>
                <ul className="mt-8 flex flex-wrap gap-2" aria-label={`${track.title} 세부 분야`}>
                  {track.topics.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-sm border border-border px-2.5 py-1 text-xs text-foreground/80"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
