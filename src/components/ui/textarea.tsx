'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  charLimit?: number
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, charLimit, id, value, ...props }, ref) => {
    const textareaId = id || React.useId()
    const charCount = typeof value === 'string' ? value.length : 0

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={textareaId} 
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          value={value}
          maxLength={charLimit}
          className={cn(
            'w-full px-4 py-3 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400',
            'transition-all duration-200 resize-none',
            'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent',
            'disabled:bg-slate-50 disabled:cursor-not-allowed',
            error 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-slate-300 hover:border-slate-400',
            className
          )}
          {...props}
        />
        <div className="flex justify-between mt-1.5">
          <div>
            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
            {helperText && !error && (
              <p className="text-sm text-slate-500">{helperText}</p>
            )}
          </div>
          {charLimit && (
            <p className={cn(
              'text-sm',
              charCount > charLimit * 0.9 ? 'text-amber-600' : 'text-slate-400'
            )}>
              {charCount}/{charLimit}
            </p>
          )}
        </div>
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
