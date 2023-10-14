import About from '@/components/About'
import ContactWidget from '@/components/ContactWidget'
import Episodes from '@/components/Episodes'
import About_HeroSection from '@/components/sections/About/HeroSection'
import HomeHero from '@/components/sections/Home/HomeHero'

export default function Home() {
  return (
    <div className='min-h-[calc(100vh-88px-88px-16px)] flex items-center justify-center'>
      <About_HeroSection />

      {/* <Episodes /> */}
      {/* <About /> */}
      {/* <ContactWidget /> */}
    </div>
  )
}
