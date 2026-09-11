import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Currently from '@/components/sections/Currently'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Terminal from '@/components/sections/Terminal'
import Poetry from '@/components/sections/Poetry'
import Contact from '@/components/sections/Contact'
import { ProjectFilterProvider } from '@/components/providers/ProjectFilterProvider'

export default function Home() {
  return (
    <ProjectFilterProvider>
      <div className="flex flex-col">
        <Hero />
        <About />
        <Currently />
        <Experience />
        <Projects />
        <Skills />
        <Terminal />
        <Poetry />
        <Contact />
      </div>
    </ProjectFilterProvider>
  )
}
