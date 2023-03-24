import { ReactNode } from 'react'

export default function ProfileLayout({ children }: { children: ReactNode }) {
    return (
        <div className='p-4 bg-slate-100'>
          {children}
        </div>
    )
  }
  