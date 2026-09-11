'use client'

import { motion } from 'framer-motion'
import { Code2, LineChart, Brain, Landmark } from 'lucide-react'
import { CURRENTLY } from '@/lib/constants'

const ICONS = [Code2, LineChart, Brain, Landmark]

export default function Currently() {
  return (
    <section id="now" className="py-12">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-xl font-semibold text-muted-foreground">
            Currently Focused On
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {CURRENTLY.map((item, index) => {
            const Icon = ICONS[index]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow"
              >
                <Icon className="h-5 w-5 text-primary mb-3" />
                <h4 className="font-semibold text-sm mb-1.5">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
