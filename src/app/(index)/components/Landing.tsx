'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import screenTop from './screenTop.webp'
import Link from 'next/link'

export const Landing = () => {
  return (
    <>
      <div className="flex flex-col pt-36 bg-slate-800 text-white">
        <div className="mx-auto flex flex-col items-center gap-8">
          <p className="mb-4 text-4xl font-mono font-light">Hash Log</p>
          <p className="mb-4 text-7xl font-bold text-transparent bg-clip-text  bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-400 via-zinc-100 to-cyan-100">
            作業ログをタイムラインに記録
          </p>

          <div className="login">
            <LoginGoogle />
          </div>
          <div>
            <Image
              className="max-w-screen-lg"
              src={screenTop}
              alt={'app capture'}
            />
          </div>
          <div className="mb-4">
            <Link
              className="hover:underline"
              href={
                'https://docs.google.com/forms/d/e/1FAIpQLSeuGuk4zxDeDrPuRk8O8MEEfixBFr1Fw8U4j3HEjLT9hAjw_w/viewform?usp=sf_link'
              }
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
const LoginGoogle = () => {
  const supabase = createClientComponentClient()
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
    console.log(data)
  }
  return (
    <button
      onClick={handleLogin}
      className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg bg-white text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
    >
      <img
        className="w-6 h-6"
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        loading="lazy"
        alt="google logo"
      />
      <span>Login with Google</span>
    </button>
  )
}
