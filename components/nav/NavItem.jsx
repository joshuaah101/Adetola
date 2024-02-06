import Link from "next/link";

const NavItem = ({ href, active, children }) => {

return (
    <Link 
        href={href} className={`${active ? 'font-bold text-purple-600 hover:text-purple-800' : ''} text-xl font-medium hover:text-purple-600 transition-all duration-300 ease-in`}>
        {children} 
    </Link>
)}

export default NavItem