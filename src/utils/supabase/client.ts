import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return document.cookie.split('; ').map(c => {
            const [name, ...rest] = c.split('=')
            return { name, value: rest.join('=') }
          }).filter(c => c.name)
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            let cookie = `${name}=${value}`
            if (options?.maxAge) cookie += `; Max-Age=${options.maxAge}`
            if (options?.path) cookie += `; Path=${options.path}`
            if (options?.sameSite) cookie += `; SameSite=${options.sameSite}`
            if (options?.secure) cookie += `; Secure`
            if (options?.domain) cookie += `; Domain=${options.domain}`
            document.cookie = cookie
          })
        },
      },
    }
  )
}
