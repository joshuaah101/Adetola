'use client'

import { CiMenuFries } from "react-icons/ci"
import MobileMenu from "./MobileMenu"
import { useEffect, useState } from "react"
import { montserrat } from '@/app/fonts'
import Link from "next/link"
import { usePathname } from 'next/navigation';
import NavItem from './NavItem'

const Navbar = () => {
    const [ toggleMenu, setToggleMenu ] = useState(false)
    
    const handleMenuClick = () => {
        setToggleMenu(!toggleMenu)
    }

    const pathname = usePathname()
    
  return (
    <div className='sticky top-0 z-20 bg-white dark:bg-black'>
        <nav className={`${montserrat.className} flex justify-between items-center px-8 md:px-24 py-5`}>
            <div className="flex flex-col space-y-2">
                <span className="h-1 w-7 bg-purple-600"></span>
                <a href="/" className="text-2xl md:text-4xl font-medium">
                    Adetola
                </a>
                <span className="h-1 w-20 bg-purple-600"></span>
            </div>


            <ul className="hidden md:flex items-center space-x-5">
                <li>
                    <NavItem href={'/'} active={pathname === '/'}>
                        Home
                    </NavItem>
                </li>

                <li>
                    <NavItem href={'/about'} active={pathname === '/about'}>
                        About
                    </NavItem>
                </li>

                <li>
                    <NavItem href={'/services'} active={pathname === '/services'}>
                        Services
                    </NavItem>
                </li>

                <li>
                    <NavItem href={'/resume'} active={pathname === '/resume'}>
                        Resume
                    </NavItem>
                </li>
            </ul>

            <CiMenuFries size={35} className="dark:text-white dark:hover:text-purple-600 rotate-180 flex md:hidden cursor-pointer transition-all duration-300 ease-in" onClick={handleMenuClick} />
        </nav>
        
        <MobileMenu toggleMenu={toggleMenu} handleClick={handleMenuClick} />
    </div>
  )
}

export default Navbar