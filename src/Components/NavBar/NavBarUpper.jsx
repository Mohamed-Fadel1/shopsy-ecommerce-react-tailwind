import React, { useContext } from 'react';
import logo from "../../assets/logo-Jm4BVSCI.png"
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';


const NavBarUpper = () => {
  const {totalItems} = useContext(ShopContext)
  return (
    <>
      <nav id='home' className='py-3 bg-primary dark:bg-colorDark duration-300 dark:text-white z-20 '>
        <div className="container flex items-center justify-between">
            {/* Left Side */}
            <div className='flex items-center gap-2'>
                <img className='w-10' src= {logo} alt="logo" />
                <p className='font-bold text-2xl'>Shopsy</p>
            </div>

            {/* Right Side */}
            <div className='flex items-center gap-3'>
                <div className='group hidden md:block'>
                    <input type="text" placeholder='Search..' className='w-[200px] px-2 py-1 rounded-full group-hover:w-[270px] transition-all duration-300 group-hover:outline-none group-focus:outline-primary dark:bg-gray-800 dark:text-white' />
                </div>

                <div className='group'>
                    <Link to={"cart"}><button className='bg-secondary px-4 py-1 rounded-full text-white flex items-center gap-4 font-bold'> <span className='hidden group-hover:block'>Order</span>  <FaShoppingCart className='text-xl relative '/> <span> {totalItems()}</span> </button></Link>
                </div>

                <DarkMode/>
            </div>

        </div>
      </nav>
    </>
  )
}

export default NavBarUpper
