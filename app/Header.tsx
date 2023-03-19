import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// todo: should use svg if possible
// i think is svg is better?
import ProfileIcon from './ProfileIcon'

const nickname = 'dogfrogfog'

export default function Header() {
  return (
    <header>
      <div className="navbar bg-pink-200">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Link to link</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 h-10 rounded-full bg-orange-600">
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href='/profile'>Profile</Link></li>
              <li><Link href='/profile/settings'>Settings</Link></li>
              <li><Link href='/signup'>Signup</Link></li>
              <li><Link href='/logout'>Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
