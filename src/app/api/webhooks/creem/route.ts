import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/utils/supabase/admin'
import { verifyWebhookSignature } from '@/lib/creem'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const payload = await request.text()
    const signature = request.headers.get('creem-signature') 
      || request.headers.get('x-creem-signature') 
      || ''

    const secret = process.env.CREEM_WEBHOOK_SECRET
    
    if (!secret) {
      console.error('CREEM_WEBHOOK_SECRET is not set')
      return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
    }

    const isValid = verifyWebhookSignature(payload, signature)
    
    if (!isValid) {
      console.error('Invalid webhook signature')
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    const event = JSON.parse(payload)
    const eventType = event.eventType || event.type
    const data = event.object || event.data || {}
    
    const userId = data.metadata?.user_id || data.request_id

    if (!userId) {
      console.error('No user_id in webhook metadata')
      return NextResponse.json({ error: 'Missing user_id' }, { status: 400 })
    }

    const supabase = createAdminClient()

    console.log(`Creem webhook: ${eventType} for user ${userId}`)

    const productId = data.product_id || data.product?.id
    const subscriptionId = data.subscription?.id || data.id
    const customerId = data.customer?.id || data.customer_id

    const isYearly = productId === process.env.CREEM_PRO_YEARLY_PRODUCT_ID
    const tier = isYearly ? 'pro_yearly' : 'pro'

    switch (eventType) {
      case 'checkout.completed': {
        const { error } = await supabase
          .from('profiles')
          .update({
            subscription_status: 'active',
            subscription_tier: tier,
            lemon_subscription_id: subscriptionId,
            lemon_customer_id: customerId,
            credits_remaining: 99999,
            updated_at: new Date().toISOString(),
          })
          .eq('id', userId)

        if (error) {
          console.error('Error updating user on checkout completed:', error)
          return NextResponse.json({ error: 'Failed to update user' }, { status: 500 })
        }

        console.log(`Checkout completed for user ${userId}, tier: ${tier}`)
        break
      }

      case 'subscription.active':
      case 'subscription.paid': {
        const { error } = await supabase
          .from('profiles')
          .update({
            subscription_status: 'active',
            subscription_tier: tier,
            lemon_subscription_id: subscriptionId,
            lemon_customer_id: customerId,
            credits_remaining: 99999,
            updated_at: new Date().toISOString(),
          })
          .eq('id', userId)

        if (error) {
          console.error('Error updating active subscription:', error)
          return NextResponse.json({ error: 'Failed to update user' }, { status: 500 })
        }

        console.log(`Subscription active for user ${userId}, tier: ${tier}`)
        break
      }

      case 'subscription.canceled':
      case 'subscription.expired':
      case 'subscription.past_due': {
        const status = data.status || eventType.replace('subscription.', '')
        const { error } = await supabase
          .from('profiles')
          .update({
            subscription_status: status,
            subscription_tier: 'free',
            lemon_subscription_id: subscriptionId,
            credits_remaining: 3,
            updated_at: new Date().toISOString(),
          })
          .eq('id', userId)

        if (error) {
          console.error('Error updating canceled subscription:', error)
          return NextResponse.json({ error: 'Failed to update user' }, { status: 500 })
        }

        console.log(`Subscription ${status} for user ${userId}`)
        break
      }

      case 'subscription.update': {
        const status = data.status
        if (status === 'active') {
          const { error } = await supabase
            .from('profiles')
            .update({
              subscription_status: 'active',
              subscription_tier: tier,
              credits_remaining: 99999,
              updated_at: new Date().toISOString(),
            })
            .eq('id', userId)

          if (error) {
            console.error('Error updating subscription:', error)
            return NextResponse.json({ error: 'Failed to update user' }, { status: 500 })
          }
        }

        console.log(`Subscription updated for user ${userId}`)
        break
      }

      case 'subscription.trialing': {
        const { error } = await supabase
          .from('profiles')
          .update({
            subscription_status: 'trialing',
            subscription_tier: tier,
            credits_remaining: 99999,
            updated_at: new Date().toISOString(),
          })
          .eq('id', userId)

        if (error) {
          console.error('Error updating trialing subscription:', error)
          return NextResponse.json({ error: 'Failed to update user' }, { status: 500 })
        }
        console.log(`Trial started for user ${userId}`)
        break
      }

      case 'refund.created': {
        console.log(`Refund created for user ${userId}`)
        break
      }

      default:
        console.log(`Unhandled webhook event: ${eventType}`)
    }

    return NextResponse.json({ received: true })

  } catch (error: any) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
