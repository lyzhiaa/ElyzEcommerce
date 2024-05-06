'use client'
import SessionProvider from '@/app/SessionProvider'
import React from 'react'
import { useSession, signIn, signOut} from "next-auth/react";

export default function Shop() {
  const { data: session } = useSession();
  if (!session) {
		return (
			<main className="w-full h-screen flex flex-col justify-center items-center">
				<p className="text-2xl mb-2">Not Signed In</p>
				<button
					className="bg-blue-600 py-2 px-6 rounded-md text-white mb-2"
					onClick={() => signIn("google")}
				>
					Sign in with google
				</button>
				<button
					className="bg-none border-gray-300 border py-2 px-6 rounded-md mb-2"
					onClick={() => signIn("github")}
				>
					Sign in with github
				</button>
			</main>
		);
	}
  return (
    <SessionProvider>
<main className="w-full h-screen flex flex-col justify-center items-center">
			<p className="text-2xl mb-2">
				Welcome <span className="font-bold">{session.user?.name}</span>. Signed
				In As
			</p>
			<p className="font-bold mb-4">{session.user?.email}</p>
			<button
				className="bg-red-600 py-2 px-6 rounded-md"
				onClick={() => signOut()}
			>
				Sign out
			</button>
		</main>
    </SessionProvider>
    
  )
}
