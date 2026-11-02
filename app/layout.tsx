import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans_KR } from 'next/font/google'
import './globals.css'

const plexKr = IBM_Plex_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plex-kr',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '세레스대학교 물리·복잡계·우주과학부 | School of Physics, Complexity & Cosmos',
  description:
    '양자에서 은하까지. 이론물리, 복잡계 과학, 천체·우주론을 하나의 언어로 탐구하는 세레스대학교 물리·복잡계·우주과학부를 소개합니다.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#07090f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${plexKr.variable} ${plexMono.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
