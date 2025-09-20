'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Code2, Palette, Brain, Heart } from 'lucide-react'

export default function About() {
  const interests = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Exploring AI applications for cultural preservation and social impact"
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Building scalable applications with modern technologies"
    },
    {
      icon: Palette,
      title: "Creative Writing",
      description: "Bilingual poetry under the pen name 'Nane Ndine Poet'"
    },
    {
      icon: Heart,
      title: "Cultural Tech",
      description: "Merging technology with Zambian culture and heritage"
    }
  ]

  return (
    <section id="about" className="py-15 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Yamikani Phiri, a final-year Computer Science student with a passion for building 
              technology that bridges cultures and creates meaningful impact. My journey in tech is 
              driven by a deep love for my Zambian heritage and a vision to preserve and celebrate 
              our rich cultural traditions through innovative digital solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me writing bilingual poetry or exploring how machine 
              learning can be applied to solve real-world problems in African contexts. I believe 
              technology should be inclusive, culturally aware, and accessible to everyone.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans from church management systems to programming languages in local 
              dialects, always with the goal of making technology more relatable and useful 
              for my community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {interests.map((interest) => (
              <Card key={interest.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <interest.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">{interest.title}</h3>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}