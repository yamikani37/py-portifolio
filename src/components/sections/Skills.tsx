'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SKILLS, SKILL_PROJECT_MAP } from '@/lib/constants'
import { useProjectFilter } from '@/components/providers/ProjectFilterProvider'
import {
  Code,
  Layers,
  Database,
  Settings,
  Brain
} from 'lucide-react'

export default function Skills() {
  const { activeTech, setActiveTech } = useProjectFilter()

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: SKILLS.languages,
      color: "text-blue-500"
    },
    {
      title: "Frameworks & Development",
      icon: Layers,
      skills: SKILLS.frameworks,
      color: "text-green-500"
    },
    {
      title: "Data & Databases",
      icon: Database,
      skills: SKILLS.databases,
      color: "text-orange-500"
    },
    {
      title: "AI / Machine Learning",
      icon: Brain,
      skills: SKILLS.ml,
      color: "text-red-500"
    },
    {
      title: "Tools",
      icon: Settings,
      skills: SKILLS.tools,
      color: "text-gray-500"
    }
  ]

  const handleSkillClick = (skill: string) => {
    const linkedProjects = SKILL_PROJECT_MAP[skill] || []
    if (linkedProjects.length === 0) return
    setActiveTech(activeTech === skill ? null : skill)
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="skills" className="py-15 bg-secondary/30">
      <div className="container px-5 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click a skill that links to a project to see where it's actually been used
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const isLinked = (SKILL_PROJECT_MAP[skill] || []).length > 0
                      return (
                        <button
                          key={skill}
                          onClick={() => handleSkillClick(skill)}
                          disabled={!isLinked}
                          className={isLinked ? 'cursor-pointer' : 'cursor-default'}
                        >
                          <Badge
                            variant={activeTech === skill ? 'default' : 'secondary'}
                            className={`transition-colors ${isLinked ? 'hover:bg-primary hover:text-primary-foreground' : 'opacity-70'}`}
                          >
                            {skill}
                          </Badge>
                        </button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
