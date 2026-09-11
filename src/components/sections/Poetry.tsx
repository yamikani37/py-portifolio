'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {SITE_CONFIG} from '@/lib/constants'

const samplePoetry = [
  {
    id: '1',
    title: 'Chalo Chachikulu',
    content: 'Chalo chachikulu chili na vyalo\nNefyakuchinja fyakwambapo\nButi twachinjile ifi fyalo',
    language: 'bemba'
  },
  {
    id: '2',
    title: 'Echoes of the Past',
    content: 'Whispers from the hills, stories old and true\nCarried on the winds, a world born anew\nAncient rhythms beat, in the heart and soul',
    language: 'english'
  },
  {
    id: '3',
    title: 'Muli Bwino',
    content: 'Muli bwino mutima wanga\nPamene paona munthu wanga\nNdine mwana wanu wamene ndinu',
    language: 'chewa'
  }
]

export default function Poetry() {
  return (
    <section id="poetry" className="py-15">
      <div className="container px-5 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">
            Beyond the code
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Poetry</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alongside software, I write bilingual and multilingual poetry under the pen name{' '}
            <span className="font-semibold text-foreground">{SITE_CONFIG.penName}</span>,
            moving between English, Chewa, and Bemba.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samplePoetry.map((poem, index) => (
            <motion.div
              key={poem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <BookText className="h-5 w-5 text-primary" />
                    {poem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {poem.content}
                  </p>
                  <div className="mt-4">
                    <span className="text-xs font-semibold uppercase text-muted-foreground">{poem.language}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href={SITE_CONFIG.links.substack} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg">
            Read More on Substack
          </Button></a>
        </motion.div>
      </div>
    </section>
  )
}