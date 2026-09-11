'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type ProjectFilterContextValue = {
  activeTech: string | null
  setActiveTech: (tech: string | null) => void
}

const ProjectFilterContext = createContext<ProjectFilterContextValue | null>(null)

export function ProjectFilterProvider({ children }: { children: ReactNode }) {
  const [activeTech, setActiveTech] = useState<string | null>(null)

  return (
    <ProjectFilterContext.Provider value={{ activeTech, setActiveTech }}>
      {children}
    </ProjectFilterContext.Provider>
  )
}

export function useProjectFilter() {
  const ctx = useContext(ProjectFilterContext)
  if (!ctx) {
    throw new Error('useProjectFilter must be used within a ProjectFilterProvider')
  }
  return ctx
}
