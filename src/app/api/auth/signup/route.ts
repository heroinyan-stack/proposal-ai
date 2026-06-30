import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/utils/supabase/admin'

export async function POST(request: NextRequest) {
  try {
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

    // 1. Create user with admin API (email_confirm: true skips email verification)
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        full_name: fullName || '',
      },
    })

    if (error) {
      // If user already exists, return success
      if (error.message?.includes('already') || error.code === 'email_exists') {
        return NextResponse.json({ success: true, message: 'User already exists' })
      }
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    const userId = data.user?.id
    if (!userId) {
      return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
    }

    // 2. Ensure identity is created (fix for known issue where admin.createUser doesn't auto-create identity)
    try {
      const { data: userData } = await supabaseAdmin.auth.admin.getUserById(userId)
      
      if (!userData?.user?.identities || userData.user.identities.length === 0) {
        // Force set password and confirm to ensure login works
        await supabaseAdmin.auth.admin.updateUserById(userId, {
          email_confirm: true,
          password,
        })
        console.log('Identity fixed for user:', userId)
      }
    } catch (e) {
      console.error('Identity fix warning:', e)
      // Continue anyway - the user might still be able to sign in
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
