export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string | null
          full_name: string | null
          subscription_status: string | null
          subscription_tier: string | null
          credits_remaining: number | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id: string
          email?: string | null
          full_name?: string | null
          subscription_status?: string | null
          subscription_tier?: string | null
          credits_remaining?: number | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          email?: string | null
          full_name?: string | null
          subscription_status?: string | null
          subscription_tier?: string | null
          credits_remaining?: number | null
          created_at?: string
          updated_at?: string | null
        }
      }
      proposals: {
        Row: {
          id: string
          user_id: string
          job_description: string
          profile_text: string
          generated_proposal: string
          credits_used: number | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          job_description: string
          profile_text: string
          generated_proposal: string
          credits_used?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          job_description?: string
          profile_text?: string
          generated_proposal?: string
          credits_used?: number | null
          created_at?: string
        }
      }
      templates: {
        Row: {
          id: string
          user_id: string
          name: string
          content: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          content: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          content?: string
          created_at?: string
        }
      }
    }
  }
}

export type Profile = Database['public']['Tables']['profiles']['Row']
export type Proposal = Database['public']['Tables']['proposals']['Row']
export type Template = Database['public']['Tables']['templates']['Row']
