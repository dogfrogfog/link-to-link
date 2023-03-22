import Link from 'next/link'
import ProfileIcon from './ProfileIcon'

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="font-semibold text-xl">
        <Link href="/">
          <span>BrandLogo</span>
        </Link>
      </div>
      <Link href="/profile">
        <ProfileIcon />
      </Link>
    </header>
  )
}
