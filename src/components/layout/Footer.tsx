import { SITE_CONFIG } from '@/lib/constants'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container px-4 mx-auto text-center">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-2xl font-bold">{SITE_CONFIG.name}</h3>
          <p className="max-w-lg text-sm">{SITE_CONFIG.tagline}</p>
          <div className="flex gap-6 mt-4">
            <a href={SITE_CONFIG.links.github} target="_blank" rel="noopener noreferrer" 
               className="hover:text-primary-foreground/80 transition-colors">
              <Github size={20} />
            </a>
            <a href={SITE_CONFIG.links.linkedin} target="_blank" rel="noopener noreferrer"
               className="hover:text-primary-foreground/80 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${SITE_CONFIG.links.email}`}
               className="hover:text-primary-foreground/80 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}