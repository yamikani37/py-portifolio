// FILE: src/app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    // Save the contact submission to Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        { name, email, message },
      ])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Failed to save message.' }, { status: 500 })
    }

    // Optional: Send an email notification here (using a third-party service like Resend, SendGrid, etc.)

    return NextResponse.json({ message: 'Message sent successfully!', data }, { status: 200 })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 })
  }
}