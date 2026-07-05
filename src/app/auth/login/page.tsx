'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Footer } from '@/components/footer'
import { createClient } from '@/utils/supabase/client'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [forgotMode, setForgotMode] = useState(false)
  const [forgotSent, setForgotSent] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const supabase = createClient()
      
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
      } else {
        router.push('/app')
        router.refresh()
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const supabase = createClient()
      
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: typeof window !== 'undefined' 
          ? `${window.location.origin}/auth/login` 
          : undefined,
      })

      if (error) {
        setError(error.message)
      } else {
        setForgotSent(true)
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-slate-900">ProposalAI</span>
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {forgotMode ? 'Reset Password' : 'Welcome back'}
            </CardTitle>
            <CardDescription>
              {forgotMode 
                ? 'Enter your email and we\'ll send you a reset link' 
                : 'Sign in to your account to continue'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {forgotSent ? (
              <div className="text-center py-6">
                <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-slate-900 font-medium mb-1">Check your email</p>
                <p className="text-sm text-slate-500 mb-4">
                  We&apos;ve sent a password reset link to <strong>{email}</strong>
                </p>
                <button
                  onClick={() => {
                    setForgotMode(false)
                    setForgotSent(false)
                  }}
                  className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Back to sign in
                </button>
              </div>
            ) : (
              <form onSubmit={forgotMode ? handleForgotPassword : handleLogin} className="space-y-4">
                {error && (
                  <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                
                <Input
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
                
                {!forgotMode && (
                  <Input
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                )}

                {!forgotMode && (
                  <div className="text-right">
                    <button
                      type="button"
                      onClick={() => setForgotMode(true)}
                      className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <Button type="submit" className="w-full" loading={loading}>
                  {forgotMode ? 'Send Reset Link' : 'Sign In'}
                </Button>
              </form>
            )}

            {!forgotSent && (
              <div className="mt-6 text-center text-sm">
                {forgotMode ? (
                  <>
                    <span className="text-slate-600">Remember your password? </span>
                    <button
                      onClick={() => setForgotMode(false)}
                      className="text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      Sign in
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-slate-600">Don&apos;t have an account? </span>
                    <Link href="/auth/signup" className="text-indigo-600 hover:text-indigo-700 font-medium">
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            )}
          </CardContent>
        </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
