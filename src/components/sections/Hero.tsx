// FILE: src/components/sections/Hero.tsx
'use client'

import { motion, useAnimation, useMotionValue, useTransform, Variants } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'
import { useEffect, useRef, useState } from 'react'
import type { MotionProps } from 'framer-motion'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const [isMobile, setIsMobile] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  // Animation controls for automatic movement
  const autoAnimationControls = useAnimation()

  // Mouse-based motion values for desktop
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [bounds, setBounds] = useState<DOMRect | null>(null)

  // Mouse follow effect logic for desktop
  const handleMouseMove = (event: React.MouseEvent) => {
    if (bounds) {
      const x = event.clientX - bounds.left
      const y = event.clientY - bounds.top
      mouseX.set(x)
      mouseY.set(y)
    }
  }

  // Auto-animation logic for mobile
  const startAutoAnimation = () => {
    autoAnimationControls.start({
      x: [-10, 10],
      y: [-10, 10],
      transition: {
        x: {
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        },
        y: {
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        },
      },
    })
  }

  // Check screen size and start/stop animations on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const isMobileDevice = window.innerWidth < 768
      setIsMobile(isMobileDevice)
      
      if (isMobileDevice) {
        startAutoAnimation()
      } else {
        autoAnimationControls.stop()
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    if (ref.current) {
      setBounds(ref.current.getBoundingClientRect())
    }

    return () => {
      window.removeEventListener('resize', checkScreenSize)
      autoAnimationControls.stop()
    }
  }, [autoAnimationControls])

  // Transform mouse coordinates into subtle avatar movement (for desktop)
  const avatarX = useTransform(mouseX, [0, bounds?.width || 0], [-20, 20], { clamp: true })
  const avatarY = useTransform(mouseY, [0, bounds?.height || 0], [-20, 20], { clamp: true })

  // Define the common animation variants
  const initialVariants: Variants = {
    initial: { opacity: 0, y: 20 },
  }

  const animateVariants: Variants = {
    animate: { opacity: 1, y: 0 },
  }

  const avatarVariants: Variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  }

  // Conditionally apply drag constraints based on isMobile
  const dragProps: MotionProps = isMobile
    ? {
        drag: true,
        dragConstraints: { left: -50, right: 50, top: -50, bottom: 50 },
        dragTransition: { bounceStiffness: 600, bounceDamping: 20 },
      }
    : {};

  return (
    <section
      ref={ref}
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden pt-24"
    >
      <div className="container px-15 mx-auto text-center z-10">
        <motion.div
          variants={{ ...initialVariants, ...animateVariants }}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Avatar / Headshot - with conditional animation */}
          <motion.div
            initial="initial"
            animate={isMobile ? autoAnimationControls : "animate"}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={isMobile ? undefined : { x: avatarX, y: avatarY }}
            className="mb-8 relative z-20"
            {...dragProps}
          >
            <Image
              src="/avatar.png"
              alt={`${SITE_CONFIG.name}'s avatar`}
              width={160}
              height={160}
              className="rounded-full mx-auto shadow-lg border-4 border-primary/20 object-cover"
              priority
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {SITE_CONFIG.name}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {SITE_CONFIG.role}
          </motion.p>

          <motion.p
            className="text-lg md:text-xl font-medium text-foreground/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {SITE_CONFIG.tagline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={{ ...initialVariants, ...animateVariants }}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <a href={SITE_CONFIG.links.github} target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href={SITE_CONFIG.links.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${SITE_CONFIG.links.email}`}
              className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
            <a href={SITE_CONFIG.links.substack} target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors">
              <FileText size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}