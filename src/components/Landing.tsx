'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const Landing = () => {
  return (
    <>
      <div className="h-screen flex flex-col pt-72 bg-slate-800 text-white">
        <div className="mx-auto flex flex-col items-center gap-8">
          <div className="">
            <h1 className="mb-4 text-6xl font-bold">
              作業ログをタイムラインに記録
            </h1>
          </div>
          <div className="login">
            <LoginGoogle />
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
