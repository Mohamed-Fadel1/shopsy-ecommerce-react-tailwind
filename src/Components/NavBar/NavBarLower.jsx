import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import NavBarResponsive from './NavBarResponsive';
import { Link } from 'react-router-dom';

const NavBarLower = () => {
  const [open , setOpen] = useState(false);

  const links = [
    {
      id : 1,
      name: "Shop",
      link: "shop"
    },
    {
      id : 2,
      name: "Top Rated",
      link: "/top-rated"
    },
    {
      id : 3,
      name: "Kids Wear",
      link: "/kids-wear"
    },
    {
      id : 4,
      name: "Mens Wear",
      link: "/mens-wear"
    },
    {
      id : 5,
      name: "Electronics",
      link: "/electronics"
    },
    {
      id : 6,
      name: "Trending Products",
      link: "/trending-products"
    },
  ];

  return (
    <>
      <div className='flex justify-end pe-6 lg:justify-center py-2 shadow-lg dark:bg-gray-800 dark:text-white'>
        <ul className='hidden items-center gap-14 lg:flex'>
          {links.map((ele) => (
            <li className='hover:text-secondary font-semibold duration-150' key={ele.id}>
              <Link to={ele.link}> {ele.name} </Link>
            </li>
          ))}
        </ul>
        <IoMdMenu onClick={() => { setOpen(!open) }} className='text-3xl cursor-pointer lg:hidden z-50' /> 
      </div>

      <NavBarResponsive open={open} />
    </>
  );
};

export default NavBarLower;
