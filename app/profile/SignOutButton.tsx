'use client';
import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <button
      className='className="w-48 bg-red-300 text-white font-bold py-2 px-4 rounded mb-4 transition duration-300 ease-in-out active:bg-red-500'
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      Sign out
    </button>
  );
}
