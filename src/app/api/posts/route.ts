import { getPosts } from '@/db'
// import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
// import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const tag = searchParams.get('tag')
  const page = searchParams.get('page') || '0'
  // const supabase = createRouteHandlerClient({ cookies })

  const posts = await getPosts(tag, parseInt(page))

  return NextResponse.json(posts)
}
