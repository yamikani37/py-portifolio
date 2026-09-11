'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, List, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ScrollToTopButton() {
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Actions for the menu
  const actions = [
    { name: 'Top', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Writing', id: 'poetry' },
    { name: 'Contact', id: 'contact' }
  ]

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsButtonVisible(true)
      } else {
        setIsButtonVisible(false)
        setIsMenuOpen(false) // Close menu if we scroll back up
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <AnimatePresence>
      {isButtonVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
        >
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="bg-background rounded-lg shadow-lg p-2"
              >
                <div className="flex flex-col gap-1">
                  {actions.map((action) => (
                    <Button
                      key={action.id}
                      variant="ghost"
                      className="justify-start"
                      onClick={() => handleScrollTo(action.id)}
                    >
                      {action.name}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Button
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="rounded-full shadow-lg"
          >
            {isMenuOpen ? <ChevronDown className="h-5 w-5" /> : <List className="h-5 w-5" />}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}