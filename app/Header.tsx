'use client'
import React, { useState } from 'react'
import Link from 'next/link'
// todo: should use svg if possible
// i think is svg is better?
import ProfileIcon from './ProfileIcon'

const nickname = 'dogfrogfog'

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="font-semibold text-xl">
        {/* Replace 'BrandLogo' with your logo */}
        <Link href="/">
          <span>BrandLogo</span>
        </Link>
      </div>
      <div className="relative">
        <button
          className="bg-blue-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={toggleDropdown}
        >
            <ProfileIcon />
        </button>
        {dropdownOpen && (
          <ul className="absolute right-0 mt-2 w-56 bg-white text-gray-700 rounded-md shadow-lg">
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href={`${nickname}/settings`}>Settings</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href={`${nickname}/profile`}>Statistics</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href={`${nickname}/appearance`}>Appearance</Link>
            </li>
            <li className="border-t border-gray-200 px-4 py-2 hover:bg-gray-100">
              <Link href={`${nickname}/signout`}>Sign Out</Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  )
}

export default Header