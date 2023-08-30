import { Landing } from '@/components/Landing'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
  const isCurrentUser = true
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    redirect('/logs')
  }
  return <Landing />
}
