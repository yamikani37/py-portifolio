'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/lib/constants'

export default function Header() {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Poetry', href: '#poetry' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm py-4"
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          {SITE_CONFIG.name}
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button */}
        </div>
      </div>
    </motion.header>
  )
}