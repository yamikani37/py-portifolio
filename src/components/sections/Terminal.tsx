'use client'

import { useEffect, useRef, useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Terminal as TerminalIcon } from 'lucide-react'
import { SITE_CONFIG, PROJECTS, SKILLS, EXPERIENCE } from '@/lib/constants'

type Line = { type: 'input' | 'output'; text: string }

const COMMANDS = ['help', 'about', 'projects', 'skills', 'experience', 'contact', 'clear']

function scrollToId(id: string) {
  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, 250)
}

function runCommand(raw: string): { output: string[]; scrollTo?: string; clear?: boolean } {
  const cmd = raw.trim().toLowerCase()

  switch (cmd) {
    case 'help':
      return {
        output: [
          'Available commands:',
          '  help        show this list',
          '  about       who I am',
          '  projects    list of projects',
          '  skills      what I work with',
          '  experience  where I\'ve worked',
          '  contact     how to reach me',
          '  clear       clear the terminal'
        ]
      }
    case 'about':
      return {
        output: [
          `${SITE_CONFIG.name} - ${SITE_CONFIG.role}`,
          SITE_CONFIG.description,
          `Writes bilingual poetry as '${SITE_CONFIG.penName}'.`
        ]
      }
    case 'projects':
      return {
        output: [
          'Featured projects:',
          ...PROJECTS.filter((p) => p.featured).map((p) => `  ${p.title} - ${p.techStack.join(', ')}`),
          'Scrolling to Projects...'
        ],
        scrollTo: 'projects'
      }
    case 'skills':
      return {
        output: [
          `Languages: ${SKILLS.languages.join(', ')}`,
          `Frameworks: ${SKILLS.frameworks.join(', ')}`,
          `Data: ${SKILLS.databases.join(', ')}`,
          `ML: ${SKILLS.ml.join(', ')}`,
          `Tools: ${SKILLS.tools.join(', ')}`,
          'Scrolling to Skills...'
        ],
        scrollTo: 'skills'
      }
    case 'experience':
      return {
        output: [
          ...EXPERIENCE.map((job) => `${job.role} @ ${job.org} (${job.period})`),
          'Scrolling to Experience...'
        ],
        scrollTo: 'experience'
      }
    case 'contact':
      return {
        output: [
          `Email:   ${SITE_CONFIG.links.email}`,
          `GitHub:  ${SITE_CONFIG.links.github}`,
          `LinkedIn: ${SITE_CONFIG.links.linkedin}`,
          'Scrolling to Contact...'
        ],
        scrollTo: 'contact'
      }
    case 'clear':
      return { output: [], clear: true }
    case '':
      return { output: [] }
    default:
      return { output: [`command not found: ${cmd}`, "type 'help' for available commands"] }
  }
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { type: 'output', text: `Welcome. Type 'help' to explore this portfolio from the terminal.` }
  ])
  const [value, setValue] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' })
  }, [lines])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const command = value
    const result = runCommand(command)

    setLines((prev) => {
      const next = result.clear ? [] : [...prev, { type: 'input' as const, text: command }]
      return [...next, ...result.output.map((text) => ({ type: 'output' as const, text }))]
    })

    if (result.scrollTo) scrollToId(result.scrollTo)
    setValue('')
  }

  return (
    <section className="py-12">
      <div className="container px-5 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-lg border border-border bg-card shadow-sm overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/50">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground ml-2">
              <TerminalIcon className="h-3.5 w-3.5" />
              yamikani@portfolio
            </span>
          </div>

          <div className="p-4 font-mono text-sm h-64 overflow-y-auto space-y-1.5">
            {lines.map((line, i) => (
              <div key={i} className={line.type === 'input' ? 'text-foreground' : 'text-muted-foreground whitespace-pre-wrap'}>
                {line.type === 'input' ? (
                  <span>
                    <span className="text-primary">$</span> {line.text}
                  </span>
                ) : (
                  line.text
                )}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 border-t border-border">
            <span className="text-primary font-mono text-sm">$</span>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="type a command..."
              list="terminal-commands"
              autoComplete="off"
              spellCheck={false}
              className="flex-1 bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground/60"
            />
            <datalist id="terminal-commands">
              {COMMANDS.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
