import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { createCheckoutSession, CREEM_PRODUCTS } from '@/lib/creem'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { planId } = await request.json()

    let productId: string
    if (planId === 'pro') {
      productId = CREEM_PRODUCTS.pro_monthly
    } else if (planId === 'pro_yearly') {
      productId = CREEM_PRODUCTS.pro_yearly
    } else {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    if (!productId) {
      return NextResponse.json(
        { error: 'Payment system not configured. Please set CREEM product IDs.' },
        { status: 500 }
      )
    }

    const checkoutUrl = await createCheckoutSession({
      productId,
      userId: user.id,
      userEmail: user.email || '',
      userName: user.user_metadata?.full_name || '',
    })

    return NextResponse.json({ url: checkoutUrl })

  } catch (error: any) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
