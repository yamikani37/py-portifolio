'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Code2, Brain, Feather, Landmark } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function About() {
  const interests = [
    {
      icon: Code2,
      title: "Real-World Systems",
      description: "Building and maintaining software that institutions and communities actually rely on"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Exploring practical ML applications for cultural preservation and social impact"
    },
    {
      icon: Landmark,
      title: "Cultural Technology",
      description: "Merging technology with Zambian culture, heritage, and local languages"
    },
    {
      icon: Feather,
      title: "Creative Writing",
      description: `Bilingual poetry under the pen name '${SITE_CONFIG.penName}'`
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
              I'm Yamikani Phiri, a Computer Science graduate and Software Developer with a passion
              for building technology that bridges cultures and creates meaningful impact. My work
              is driven by a deep connection to my Zambian heritage and a vision to preserve and
              celebrate our cultural traditions through practical digital solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I've worked on real institutional systems as a developer and consultant, and I spend
              the rest of my time building projects at the intersection of AI/ML, data, and African
              culture, and completing WorldQuant University's Foundations of Financial Engineering
              certificate, which now feeds into how I think about financial data and time series.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not writing code, you'll find me writing bilingual poetry under the pen name
              '{SITE_CONFIG.penName}'. I believe technology should be inclusive, culturally aware,
              and useful to the people it's built for. That belief is really the throughline in
              everything I build: {SITE_CONFIG.tagline}
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
              <Card key={interest.title} className="hover:shadow-lg hover:-translate-y-0.5 transition-all">
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
