// FILE: src/lib/supabase.ts
// The `createClient` function is stable across versions and requires no changes.
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface Project {
  id: string
  title: string
  description: string
  tech_stack: string[]
  github_url?: string
  live_url?: string
  image_url?: string
  featured: boolean
  created_at: string
}

export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  slug: string
  published: boolean
  created_at: string
  updated_at: string
}

export interface Poetry {
  id: string
  title: string
  content: string
  language: 'english' | 'chewa' | 'bemba'
  published: boolean
  created_at: string
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}