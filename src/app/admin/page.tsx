// FILE: src/app/admin/page.tsx
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Lock, FileText, Wrench } from 'lucide-react'

export default function AdminPage() {
  // This is a placeholder for the admin dashboard home page.
  // It would typically display a login form or a dashboard with links to manage content.
  // We'll use a simple mock for now.
  
  // In a real application, you would add an authentication check here.
  const isAuthenticated = false // This would be a state or a context value

  if (!isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex min-h-[60vh] items-center justify-center"
      >
        <Card className="w-full max-w-md p-8 text-center">
          <CardHeader>
            <Lock className="w-12 h-12 mx-auto mb-4 text-primary" />
            <CardTitle className="text-2xl font-bold">Admin Dashboard</CardTitle>
            <p className="text-muted-foreground">Please log in to access this page.</p>
          </CardHeader>
          <CardContent>
            {/* Login form or sign-in button */}
            <Button className="w-full">
              Sign In
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  // This is the dashboard view for an authenticated user.
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Yamikani. Manage your content here.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="text-center p-6">
            <FileText className="w-10 h-10 mx-auto mb-4 text-primary" />
            <CardTitle>Manage Projects</CardTitle>
            <p className="text-sm text-muted-foreground">Add, edit, or delete your portfolio projects.</p>
            <Button variant="outline" className="mt-4">Go</Button>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="text-center p-6">
            <FileText className="w-10 h-10 mx-auto mb-4 text-primary" />
            <CardTitle>Manage Poetry</CardTitle>
            <p className="text-sm text-muted-foreground">Publish and update your latest poems.</p>
            <Button variant="outline" className="mt-4">Go</Button>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="text-center p-6">
            <Wrench className="w-10 h-10 mx-auto mb-4 text-primary" />
            <CardTitle>Site Settings</CardTitle>
            <p className="text-sm text-muted-foreground">Configure global site settings.</p>
            <Button variant="outline" className="mt-4">Go</Button>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}