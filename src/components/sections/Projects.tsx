'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, ChevronDown, X } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'
import { useProjectFilter } from '@/components/providers/ProjectFilterProvider'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const { activeTech, setActiveTech } = useProjectFilter()

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    PROJECTS.forEach((project) => project.techStack.forEach((tech) => tags.add(tech)))
    return Array.from(tags).sort()
  }, [])

  const visibleProjects = useMemo(() => {
    const base = showAll ? PROJECTS : PROJECTS.filter((p) => p.featured)
    if (!activeTech) return base
    return base.filter((p) => p.techStack.includes(activeTech))
  }, [showAll, activeTech])

  return (
    <section id="projects" className="py-15">
      <div className="container px-5 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects that blend engineering with cultural and real-world relevance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTech(activeTech === tag ? null : tag)}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full"
            >
              <Badge
                variant={activeTech === tag ? 'default' : 'outline'}
                className="cursor-pointer text-xs transition-colors hover:bg-accent"
              >
                {tag}
              </Badge>
            </button>
          ))}
          {activeTech && (
            <button
              onClick={() => setActiveTech(null)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 ml-1"
            >
              <X className="h-3 w-3" /> Clear filter
            </button>
          )}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => {
              const isExpanded = expandedId === project.id
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={isExpanded ? 'lg:col-span-2' : undefined}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow group border-border">
                    <button
                      className="w-full text-left"
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                      aria-expanded={isExpanded}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <ChevronDown
                            className={`h-5 w-5 text-muted-foreground shrink-0 mt-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        </div>
                        <CardDescription className="text-base">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                    </button>

                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <button key={tech} onClick={() => setActiveTech(activeTech === tech ? null : tech)}>
                            <Badge
                              variant={activeTech === tech ? 'default' : 'secondary'}
                              className="text-xs cursor-pointer"
                            >
                              {tech}
                            </Badge>
                          </button>
                        ))}
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden space-y-3 border-t border-border pt-4"
                          >
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">Problem</p>
                              <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">Approach</p>
                              <p className="text-sm text-muted-foreground leading-relaxed">{project.approach}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex gap-2 pt-1">
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild className="active:scale-95 transition-transform">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button size="sm" asChild className="active:scale-95 transition-transform">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {visibleProjects.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">
            No projects use {activeTech} yet. Try another tag.
          </p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Featured Only' : 'View All Projects'}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
