export interface CreemCheckoutOptions {
  productId: string
  userId: string
  userEmail: string
  userName?: string
  successUrl?: string
  cancelUrl?: string
}

export interface CreemWebhookEvent {
  type: string
  data: {
    id: string
    object: string
    status?: string
    customer_email?: string
    customer_name?: string
    product_id?: string
    subscription_id?: string
    currency?: string
    amount_total?: number
    metadata?: Record<string, any>
    [key: string]: any
  }
  created: number
}

const CREEM_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://api.creem.io/v1'
  : 'https://test-api.creem.io/v1'

const CREEM_API_KEY = process.env.CREEM_API_KEY || ''

export const CREEM_PRODUCTS = {
  pro_monthly: process.env.CREEM_PRO_MONTHLY_PRODUCT_ID || '',
  pro_yearly: process.env.CREEM_PRO_YEARLY_PRODUCT_ID || '',
}

export async function createCheckoutSession(options: CreemCheckoutOptions) {
  const { productId, userId, userEmail, userName, successUrl, cancelUrl } = options

  if (!CREEM_API_KEY) {
    throw new Error('CREEM_API_KEY is not configured')
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

  const response = await fetch(`${CREEM_BASE_URL}/checkouts`, {
    method: 'POST',
    headers: {
      'x-api-key': CREEM_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      product_id: productId,
      success_url: successUrl || `${baseUrl}/checkout/success`,
      cancel_url: cancelUrl || `${baseUrl}/pricing`,
      customer: {
        email: userEmail,
        name: userName,
      },
      metadata: {
        user_id: userId,
      },
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(`Creem checkout creation failed: ${JSON.stringify(error)}`)
  }

  const data = await response.json()
  return data.url || data.data?.url
}

export async function cancelSubscription(subscriptionId: string) {
  if (!CREEM_API_KEY) {
    throw new Error('CREEM_API_KEY is not configured')
  }

  const response = await fetch(`${CREEM_BASE_URL}/subscriptions/${subscriptionId}/cancel`, {
    method: 'POST',
    headers: {
      'x-api-key': CREEM_API_KEY,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(`Creem subscription cancellation failed: ${JSON.stringify(error)}`)
  }

  return response.json()
}

export async function createBillingPortal(customerId: string) {
  if (!CREEM_API_KEY) {
    throw new Error('CREEM_API_KEY is not configured')
  }

  const response = await fetch(`${CREEM_BASE_URL}/customers/billing`, {
    method: 'POST',
    headers: {
      'x-api-key': CREEM_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      customer_id: customerId,
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(`Creem billing portal creation failed: ${JSON.stringify(error)}`)
  }

  const data = await response.json()
  return data.url || data.data?.url
}

export function verifyWebhookSignature(payload: string, signature: string): boolean {
  const secret = process.env.CREEM_WEBHOOK_SECRET
  
  if (!secret) {
    console.error('CREEM_WEBHOOK_SECRET is not set')
    return false
  }

  const crypto = require('crypto')
  const hmac = crypto.createHmac('sha256', secret)
  const digest = hmac.update(payload).digest('hex')

  return digest === signature
}
