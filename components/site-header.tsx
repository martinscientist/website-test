'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Logo, NAV_ITEMS } from '@/components/logo'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />

        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#admissions"
            className="hidden rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            입학 안내
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-10 items-center justify-center rounded-sm border border-border md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
            <span className="sr-only">{open ? '메뉴 닫기' : '메뉴 열기'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="모바일 메뉴" className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-5 py-4">
            {[...NAV_ITEMS, { href: '#admissions', label: '입학 안내' }].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
