import React from 'react';
import { bestProducts } from './BestProductsData';
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';

const BestProducts = () => {
  return (
    <>
      <section className='dark:bg-gray-900 dark:text-white'>
        <div className="container py-20">
          <div className='text-center md:text-left space-y-1 ' >
            <h5 data-aos="fade-up" className='text-secondary font-semibold'>Top Rated Products for you</h5>
            <h3 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h3>
            <p data-aos="fade-up" className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center mt-20 '>
            {bestProducts.map((ele) => (
              <Link to={`/details/${ele.id}`} key={ele.id}>
                <div 
                  data-aos="zoom-in"
                  data-aos-delay="200" 
                  className='rounded-2xl p-4 bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-secondary hover:text-white relative shadow-xl duration-300 group max-w-[300px] cursor-pointer '>
                  
                  <img 
                    className='max-w-[140px] block mx-auto transform -translate-y-10 group-hover:scale-105 duration-300 drop-shadow-md' 
                    src={ele.img} 
                    alt={ele.name} 
                  />
                  
                  <div className='flex gap-1 items-center justify-center text-yellow-400 text-lg'>
                    <IoIosStar/> 
                    <IoIosStar/> 
                    <IoIosStar/> 
                    <IoIosStar/> 
                  </div>
                  
                  <h5 className='text-center dark:text-white text-xl font-semibold my-2'> 
                    {ele.name} 
                  </h5>
                  <p className='text-center text-sm dark:text-gray-400 group-hover:text-white '> 
                    {ele.desc} 
                  </p>
                  
                  <button className=' capitalize bg-secondary px-5 py-1 rounded-full block m-auto text-white my-2 group-hover:bg-white group-hover:text-secondary '>order now</button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BestProducts;
