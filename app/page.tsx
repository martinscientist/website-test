import { Admissions } from '@/components/admissions'
import { Curriculum } from '@/components/curriculum'
import { Facilities } from '@/components/facilities'
import { Hero } from '@/components/hero'
import { News } from '@/components/news'
import { ResearchTracks } from '@/components/research-tracks'
import { ScaleSection } from '@/components/scale-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { StatsBand } from '@/components/stats-band'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StatsBand />
        <ScaleSection />
        <ResearchTracks />
        <Facilities />
        <Curriculum />
        <News />
        <Admissions />
      </main>
      <SiteFooter />
    </>
  )
}
