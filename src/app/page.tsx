import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Aboutme } from '@/components/Aboutme'
import { Services } from '@/components/Services'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Aboutme />
      <Services />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}
