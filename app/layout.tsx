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
      <body className='body min-h-full mx-auto border-8 border-indigo-600'>
        <Header />
        <div className='w-full min-h-full'>
          {children}
        </div>
      </body>
    </html>
  )
}
