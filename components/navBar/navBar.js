import Image from "next/dist/client/image";
export default function NavBar(){
    return (
       <>
<nav className="w-screen bg-green-200 dark:bg-black dark:text-white flex flex-col md:flex-row items-center md:justify-between px-6 py-4 border-b border-b-gray-60 shadow-sm max-w-screen-2xl mx-auto">
  {/* Logo */}
  <div>
    <h2 className="text-3xl font-bold">
      <Image src="/Logo.png" width={140} height={59} className='bg-green-200' />
    </h2>
  </div>
  {/* /End Logo */}
        <div className="mt-5 md:mt-0">
            <ul className="flex flex-col md:flex-row md:space-x-5 w-full items-center">
            <li>
                <a href="/" className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">Home</a>
            </li>
            <li>
                <a href="/services" className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">Services</a>
            </li>
            <li>
                <a href="/contact" className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">Contact Us</a>
            </li>
            <li>
                <a href="/about" className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">About Us</a>
            </li>
            <li>
                <a href="/market" className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">Pricing</a>
            </li>
            </ul>
        </div>
</nav>

</>
    );
}