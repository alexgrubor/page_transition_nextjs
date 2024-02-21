'use client'
import Link from "next/link";

import { usePathname } from 'next/navigation'

const Header = () => {
 
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
        <li className="text-2xl font-bold">
          <Link href="/">YourBrand</Link>
        </li>
        <ul className="flex gap-4">
          <li>
            <Link href="/">
              <span
                className={`hover:text-gray-300 cursor-pointer ${
                  pathname === '/' ? "text-pink-500" : ""
                }`}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span
                className={`hover:text-gray-300 cursor-pointer ${
                  pathname === "/about" ? "text-pink-500" : ""
                }`}
              >
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span
                className={`hover:text-gray-300 cursor-pointer ${
                  pathname === "/contact" ? "text-pink-500" : ""
                }`}
              >
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Header;

