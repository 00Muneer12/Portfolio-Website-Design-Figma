import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="text-slate-900 body-font bg-slate-900">
    <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center">
      <Link href="" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <h2 className="text-3xl font-bold text-yellow-500 hover:text-cyan-500 ">
          <span className="ml-1 text-xl ">
          <Image src="/logo-gmu-2.png" 
          width={80} 
          height={60} 
          alt='logo'
         /></span>
          </h2>
      </Link>
      <nav className="md:ml-auto md:mr-auto border-cyan-600 flex flex-wrap items-center text-base justify-center">
        <Link href="/" className="mr-5 text-blue-700  hover:text-blue-200">Home</Link>
        <Link href="/about" className="mr-5 text-blue-700 hover:text-blue-200">About</Link>
        <Link href="/projects" className="mr-5 text-blue-700 hover:text-blue-200">Projects</Link>
        <Link href="/contact" className="mr-5 text-blue-700 hover:text-blue-200">Contact</Link>
      </nav>
      <button className="inline-flex items-center border-0 text-blue-700 py-1 px-3 focus:outline-none hover:text-blue-200 rounded text-base mt-4 md:mt-0">
        Download CV
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </header>
  
  )
}

export default Navbar