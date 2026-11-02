export const NAV_ITEMS = [
  { href: '#about', label: '학부 소개' },
  { href: '#research', label: '연구 분야' },
  { href: '#facilities', label: '연구 시설' },
  { href: '#curriculum', label: '교육과정' },
  { href: '#news', label: '소식' },
]

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="세레스대학교 물리·복잡계·우주과학부 홈">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="3" className="fill-primary" />
        <ellipse cx="14" cy="14" rx="12.5" ry="5.5" className="stroke-foreground/60" strokeWidth="1" />
        <ellipse
          cx="14"
          cy="14"
          rx="12.5"
          ry="5.5"
          transform="rotate(60 14 14)"
          className="stroke-foreground/30"
          strokeWidth="1"
        />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-semibold tracking-tight">세레스대학교</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Physics · Complexity · Cosmos
        </span>
      </span>
    </a>
  )
}
