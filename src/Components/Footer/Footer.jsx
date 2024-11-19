import React from 'react'
import footerImg from "../../assets/footer-pattern.jpg";
import logo from "../../assets/logo-Jm4BVSCI.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";



const Footer = () => {
    const footerImage = {
        backgroundImage : `url(${footerImg})`,
        backgroundPosition : "bottom",
        backgroundRepeat : "no-repeat",
        backgroundSize : "cover",
        height :"100%",
        width :"100%"
      }
  return (
    <>
    <footer style={footerImage} className='mt-20'>
  <div className="container text-white pt-20 pb-32 grid grid-cols-1 lg:grid-cols-3 gap-16 justify-between">
    <div className='space-y-3 '>
      <div className='flex items-center gap-4'>
        <img className='w-14' src={logo} alt="logo" />
        <h6 className='text-3xl font-bold'>Shopsy</h6>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae ea recusandae blanditiis veritatis.</p>
    </div>

    <div className='flex items-center justify-around lg:justify-between'>
      <div className='space-y-2'>
        <h5 className='text-xl font-semibold'>Important Links</h5>
        <ul className='text-gray-300 space-y-4'>
          <li className='hover:text-secondary duration-200 cursor-pointer hover:translate-x-1'>Home</li>
          <li className='hover:text-secondary duration-200 cursor-pointer hover:translate-x-1'>About</li>
          <li className='hover:text-secondary duration-200 cursor-pointer hover:translate-x-1'>Contact</li>
          <li className='hover:text-secondary duration-200 cursor-pointer hover:translate-x-1'>Blog</li>
        </ul>
      </div>

      <div className='space-y-2'>
        <h5 className='text-xl font-semibold'>Links</h5>
        <ul className='text-gray-300 space-y-4'>
          <li className='hover:text-secondary duration-200 cursor-pointer hover:translate-x-1'>Home</li>
          <li className='hover:text-secondary duration-200 cursor-pointer hover:translate-x-1'>About</li>
          <li className='hover:text-secondary duration-200 cursor-pointer hover:translate-x-1'>Contact</li>
          <li className='hover:text-secondary duration-200 cursor-pointer hover:translate-x-1'>Blog</li>
        </ul>
      </div>
    </div>

    <div className='flex flex-col lg:items-center space-y-3'>
      <h5 className='text-xl font-semibold mb-4'>Follow Us</h5>
      <div className='flex gap-5'>
        <FaInstagram className='text-2xl font-bold'/>
        <FaFacebook className='text-2xl font-bold'/>
        <FaLinkedin className='text-2xl font-bold'/>
      </div>

      <div className='flex items-center gap-3'>
        <FaLocationArrow/>
        <p>Noida, Uttar Pradesh</p>
      </div>

      <div className='flex items-center gap-3'>
        <FaMobileAlt/>
        <p>+91 123456789</p>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
