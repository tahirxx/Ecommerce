import PropTypes from 'prop-types';
import { MdOutlineSearch } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function Navbar({ size }) {
  return (
    <>
      <header className='bg-white flex-wrap items-center shadow-md'>
        <nav className='border-grap-200 bh-white py-6'>
            <div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto' >
                <a href="/" className='flex items-center'>
                    <span className='self-center text-[1.8rem] font-semibold whitespace-nowrap text-black font-[lobster]' >
                    LuxeLane
                    </span>
                </a>
                <div className="flex items-center lg:order-2">
                  <div className="hidden mt-2 mr-4 sm:inline-block">
                    <span />
                  </div>
                  <a 
                    href="/login"
                    className="text-gray-800 hover:text-gray-600 rounded-lg text-sm px-4 py-2 lg:mr-0"
                    >
                     Login / Register
                    </a>
                    <a 
                    href=""
                    className="text-gray-800 hover:text-gray-600 rounded-lg text-sm px-4 py-2 lg:mr-0"
                    >
                      <MdOutlineSearch />
                    </a>
                  
                    <a 
                    href="/cart"
                    className="text-gray-800 hover:text-gray-600 rounded-lg text-sm px-4 py-2 lg:mr-0"
                    
                    >
                      <MdOutlineShoppingBag />
                      <span>{size}</span>
                    </a>
                </div>
              <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order:1">
                <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg-mt-0">
                  <li>
                    <a href="/" className="block py-2 pl-3 pr-4 text-black hover:border-b-2 border-[#7d0d0d] lg:p-0 uppercase">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/womens" className="block py-2 pl-3 pr-4 text-black hover:border-b-2 border-[#7d0d0d] lg:p-0 uppercase">
                      Womens
                    </a>
                  </li>
                  <li>
                    <a href="/mens" className="block py-2 pl-3 pr-4 text-black hover:border-b-2 border-[#7d0d0d] lg:p-0 uppercase">
                      Mens
                    </a>
                  </li>
                  
                  <li>
                    <a href="/kids" className="block py-2 pl-3 pr-4 text-black hover:border-b-2 border-[#7d0d0d] lg:p-0 uppercase">
                      Kids
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-black hover:border-b-2 border-[#7d0d0d] lg:p-0 uppercase">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-black hover:border-b-2 border-[#7d0d0d] lg:p-0 uppercase">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>

        </nav>
      </header>
    </>
  )
}

Navbar.propTypes = {
  size: PropTypes.arrayOf(PropTypes.number),
};