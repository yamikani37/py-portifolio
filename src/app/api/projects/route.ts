// FILE: src/app/api/projects/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { Project } from '@/lib/supabase'

export async function GET() {
  try {
    const { data: projects, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Failed to fetch projects.' }, { status: 500 })
    }

    return NextResponse.json(projects as Project[], { status: 200 })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 })
  }
}