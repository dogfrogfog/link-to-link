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
      <body className='w-full h-screen mx-auto p-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500'>
        <Header />
        <div className='w-full'>
          {children}
        </div>
      </body>
    </html>
  )
}
