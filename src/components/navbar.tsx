'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { createClient } from '@/utils/supabase/client'

export function Navbar() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()
    
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-900">ProposalAI</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors">How It Works</a>
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
          </div>
          
          {loading ? (
            <div className="flex items-center gap-3">
              <div className="w-16 h-8 bg-slate-100 animate-pulse rounded" />
              <div className="w-20 h-8 bg-slate-100 animate-pulse rounded" />
            </div>
          ) : user ? (
            <div className="flex items-center gap-3">
              <Link href="/app">
                <Button variant="ghost" size="sm">Dashboard</Button>
              </Link>
              <Link href="/app">
                <Button size="sm">Go to App</Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">Log In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm">Start Free</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
