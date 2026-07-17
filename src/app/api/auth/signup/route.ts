import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/utils/supabase/admin'

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || ''
    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type must be application/json' },
        { status: 400 }
      )
    }

    const { email, password, fullName } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      )
    }

    const supabaseAdmin = createAdminClient()

    // 1. Check if user already exists
    try {
      const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers()
      const existing = existingUsers?.users?.find(u => u.email === email)
      
      if (existing) {
        // If user exists but has no identity, fix their password
        if (!existing.identities || existing.identities.length === 0) {
          await supabaseAdmin.auth.admin.updateUserById(existing.id, {
            email_confirm: true,
            password,
          })
          console.log('Fixed identity for existing user:', existing.id)
          return NextResponse.json({
            success: true,
            userId: existing.id,
            message: 'Account updated, please sign in',
          })
        }
        
        return NextResponse.json(
          { error: 'An account with this email already exists. Please sign in instead.' },
          { status: 409 }
        )
      }
    } catch (e) {
      console.error('User lookup warning:', e)
      // Continue with creation
    }

    // 2. Create user with admin API
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        full_name: fullName || '',
      },
    })

    if (error) {
      if (error.message?.includes('already') || error.code === 'email_exists') {
        return NextResponse.json(
          { error: 'An account with this email already exists. Please sign in instead.' },
          { status: 409 }
        )
      }
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    const userId = data.user?.id
    if (!userId) {
      return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
    }

    // 3. Force update password to ensure identity is properly created
    // This fixes the known Supabase issue where admin.createUser doesn't create a proper identity
    try {
      await supabaseAdmin.auth.admin.updateUserById(userId, {
        email_confirm: true,
        password,
      })
      console.log('Password identity ensured for user:', userId)
    } catch (e) {
      console.error('Password identity fix warning:', e)
      // Continue anyway
    }

    return NextResponse.json({
      success: true,
      userId,
    })
  } catch (error: any) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
