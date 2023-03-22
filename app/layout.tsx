import './globals.css'
import { ReactNode } from 'react'
import Header from './Header';

export const metadata = {
  title: 'Link to link',
  description: '<Service to manage your bio>',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className='body h-screen mx-auto bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'>
        <Header />
        <div className='w-full min-h-full bg-white'>
          {children}
        </div>
      </body>
    </html>
  )
}
