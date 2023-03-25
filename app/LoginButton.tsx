'use client';
import { signIn } from 'next-auth/react';

export default function LoginButton() {
  return (
    <button
      onClick={() =>
        signIn(undefined, {
          callbackUrl: '/profile',
        })
      }
      type="button"
    >
      Login
    </button>
  );
}
