// FILE: src/app/admin/layout.tsx
import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  // This layout can be used to add a sidebar, a header, or authentication logic for the admin dashboard.
  // For now, it's a simple wrapper.
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="container px-4 py-12 mx-auto">
        {children}
      </main>
    </div>
  )
}