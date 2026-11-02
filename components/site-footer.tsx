import { Logo, NAV_ITEMS } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 md:flex-row md:justify-between md:px-8">
        <div className="space-y-4">
          <Logo />
          <address className="text-sm not-italic leading-relaxed text-muted-foreground">
            대전광역시 유성구 과학로 137 자연과학관
            <br />
            042-000-1987 · physics@ceres.ac.kr
          </address>
        </div>
        <nav aria-label="푸터 메뉴">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-12 max-w-7xl px-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/70 md:px-8">
        © 2026 Ceres University · School of Physics, Complexity &amp; Cosmos
      </p>
    </footer>
  )
}
