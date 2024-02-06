import Link from "next/link";
import { BiLogInCircle, BiX } from "react-icons/bi";
import { usePathname } from "next/navigation"
import NavItem from "./NavItem";

type Functions = {
    toggleMenu : any,
    handleClick: any
}

const MobileMenu = ({ toggleMenu, handleClick }: Functions) => {
    const pathname = usePathname()
  return (
    <div className={ !toggleMenu ? 'hidden w-0 transition duration-500 ease-out' : 'absolute top-0 right-0 transition duration-500 ease-in bg-white/90 dark:bg-slate-900/90 h-screen w-full flex flex-col px-5 py-5 space-y-8' }>
        <div className='flex justify-between'>
            <div className=""></div>
            <BiX size={60} className='cursor-pointer text-slate-900 dark:text-slate-300' onClick={ handleClick } />
        </div>
        
        <ul className="flex flex-col space-y-8 justify-center items-center">
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
    </div>
  )
}

export default MobileMenu