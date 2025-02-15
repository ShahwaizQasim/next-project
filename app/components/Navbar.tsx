"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { useSession } from "next-auth/react";
import { UserCircle } from 'lucide-react';


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  return (
    <>


      <header className="bg-[#F2F5F6] shadow-sm border-b border-black/25 z-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/">
                <span className="flex items-center">
                  <Image src="/logo.png" alt="Company Logo" width={50} height={50} className="h-12 w-auto" />
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center text-[14px] space-x-6">
              <Link href="/" className={`text-gray-600 hover:text-gray-900 ${usePathname() === "/" && "border-b-2 border-green-500"}`}>Home</Link>
              <Link href="/about-us" className={`text-gray-600 hover:text-gray-900 ${usePathname() === "/about-us" && "border-b-2 border-green-500"}`}>About US</Link>
              <Link href="/contact-us" className={`text-gray-600 hover:text-gray-900 ${usePathname() === "/contact-us" && "border-b-2 border-green-500"}`}>CONTACT US</Link>
              <Link href="/client-login" className={`text-gray-600 hover:text-gray-900 ${usePathname() === "/client-login" && "border-b-2 border-green-500"}`}>Client Login</Link>
            </div>
            {status === "authenticated" ? (
              <>
                <Link href={"/dashboard"}>
                  <UserCircle className="h-7 w-7" />
                  <span className="sr-only">Profile</span></Link>
              </>
            ) : (
              <>
                <div className="hidden md:flex gap-2 items-center">
                  <Link href={"/signup"}>
                    <button className='w-[80px] h-[35px] bg-green-500 shadow-md shadow-black/35 hover:bg-green-600 hover:text-white transition-all duration-500' >Sign up</button>
                  </Link>
                  <Link href={"/login"}>
                    <button className='w-[80px] h-[35px] border-2 border-black hover:bg-black hover:text-white transition-all duration-500'>Login</button>
                  </Link>
                </div>
              </>
            )}


            <div className="md:hidden">
              <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/support" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">SUPPORT</Link>
              <Link href="/demo" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">REQUEST FOR DEMO</Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">CONTACT US</Link>
              <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">CLIENT LOGIN</Link>
              <a href="tel:+919200901206" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +92 - 300-1355-235
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
