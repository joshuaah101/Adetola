'use client'
import { CiMenuFries } from "react-icons/ci"
import MobileMenu from "./MobileMenu"
import { useState } from "react"
import { montserrat } from '@/app/fonts'
import Link from "next/link"

const Navbar = () => {
    const [ toggleMenu, setToggleMenu ] = useState(false)
    
    const handleMenuClick = () => {
        setToggleMenu(!toggleMenu)
    }
  return (
    <div className='px-2 sm:px-0 py-2 sm:py-0 sticky top-0 z-20'>
        <nav className={`${montserrat.className} flex justify-between items-center px-8 md:px-24 py-5`}>
            <div className="flex flex-col space-y-2">
                <span className="h-1 w-12 bg-purple-600"></span>
                <a href="/" className="text-2xl md:text-4xl font-medium">
                    Adetola
                </a>
                <span className="h-1 w-12 bg-purple-600"></span>
            </div>


            <ul className="hidden md:flex items-center space-x-5">
                <li>
                    <Link href="#" className="text-xl font-medium hover:text-purple-600 transition-all duration-300 ease-in">
                        Home
                    </Link>
                </li>

                <li>
                    <Link href="#" className="text-xl font-medium hover:text-purple-600 transition-all duration-300 ease-in">
                        Resume
                    </Link>
                </li>

                <li>
                    <Link href="#" className="text-xl font-medium hover:text-purple-600 transition-all duration-300 ease-in">
                        About
                    </Link>
                </li>

                <li>
                    <Link href="#" className="text-xl font-medium hover:text-purple-600 transition-all duration-300 ease-in">
                        Contact
                    </Link>
                </li>
            </ul>

            <CiMenuFries size={35} className="dark:text-white dark:hover:text-purple-600 rotate-180 flex md:hidden cursor-pointer transition-all duration-300 ease-in" onClick={handleMenuClick} />
        </nav>
        
        <MobileMenu toggleMenu={toggleMenu} handleClick={handleMenuClick} />
    </div>
  )
}

export default Navbar