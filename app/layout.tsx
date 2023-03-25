import './globals.css';
import Link from 'next/link';
import AuthContext from './AuthContext';
import { Suspense } from 'react';
import { getServerSession } from 'next-auth/next';
import Image from 'next/image';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LoginButton from './LoginButton';

export const metadata = {
  title: 'Link to link',
  description: '<Service to manage your bio>',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body min-h-full mx-auto border-8 border-indigo-600">
        <AuthContext>
          <header className="bg-blue-500 h-12 text-white p-2 flex justify-between items-center">
            <Link href="/">
              <span className="font-semibold text-xl">BrandLogo</span>
            </Link>
            <Suspense fallback={<div className="bg-red-200"></div>}>
              {/* @ts-ignore */}
              <HeaderRightButton />
            </Suspense>
          </header>
          <div className="w-full min-h-full">{children}</div>
        </AuthContext>
      </body>
    </html>
  );
}

async function HeaderRightButton() {
  const session = await getServerSession(authOptions);

  return session?.user ? (
    <Link href="/profile">
      <Image
        src={session?.user?.image as string}
        alt="Profile image"
        width={32}
        height={32}
        className="rounded-full"
      />
    </Link>
  ) : (
    <LoginButton />
  );
}
