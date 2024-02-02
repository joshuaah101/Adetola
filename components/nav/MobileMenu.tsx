import Link from "next/link";
import { BiLogInCircle, BiX } from "react-icons/bi";

type Functions = {
    toggleMenu : any,
    handleClick: any
}

const MobileMenu = ({ toggleMenu, handleClick }: Functions) => {
  return (
    <div className={ !toggleMenu ? 'hidden w-0 transition duration-500 ease-out' : 'absolute top-0 right-0 transition duration-500 ease-in bg-white/60 dark:bg-slate-900/90 h-screen w-full flex flex-col px-5 py-5 space-y-8' }>
        <div className='flex justify-between'>
            <div className=""></div>
            <BiX size={60} className='cursor-pointer text-slate-900 dark:text-slate-300' onClick={ handleClick } />
        </div>
        
        <ul className="flex flex-col space-y-8 justify-center items-center">
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
    </div>
  )
}

export default MobileMenu