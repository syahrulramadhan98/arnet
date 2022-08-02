import Image from "next/dist/client/image";
import Link from 'next/link'
export default function NavBar(){
    return (
       <>
<nav className="w-full bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 dark:bg-black dark:text-white flex flex-col md:flex-row items-center md:justify-between px-6 py-4 border-b border-b-gray-60 shadow-sm mx-auto">
  {/* Logo */}
  <div>
    
      <Image src="/Logo.png" width={140} height={59}  />
    
  </div>
  {/* /End Logo */}
        <div className="mt-5 md:mt-0">
            <ul className="flex flex-col md:flex-row md:space-x-5 w-full items-center">
            <li>
                <Link href="/"><a className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">Home</a></Link>
            </li>
            <li>
                <Link href="/services"><a  className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">Services</a></Link>
            </li>
            <li>
                <Link href="/contact"><a className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">Contact Us</a></Link>
            </li>
            <li>
                <Link href="/about"><a className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">About Us</a></Link>
            </li>
            <li>
                <Link href="/market"><a className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">Pricing</a></Link>
            </li>
            </ul>
        </div>
</nav>

</>
    );
}