import React from 'react';
import saleImg from "../../assets/women2.jpg"
import { CiAvocado } from "react-icons/ci";
import { CiBasketball } from "react-icons/ci";
import { CiFolderOff } from "react-icons/ci";



const Sale = () => {
  return (
    <>
     <section className='dark:bg-gray-900 dark:text-white py-28'>
        <div className="container grid  lg:grid-cols-2 gap-5 lg:gap-0 ">
            <div  data-aos="flip-left">
                <img className='w-[450px] shadow-[5px_5px_20px_#000]' src= {saleImg} alt="saleImg" />
            </div>

            <div  data-aos = "fade-up" className='space-y-4'>
                <h2 className='text-4xl font-bold'>Winter Sale upto 50% Off</h2>
                <p className='text-gray-600 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
                <div className='flex items-center gap-2'>
                    <p className='bg-indigo-200 w-10 h-10 rounded-full flex justify-center items-center'><CiAvocado className='text-xl dark:text-black' /></p>
                    <p>Quality Products</p>
                </div>

                <div className='flex items-center gap-2'>
                    <p className='bg-orange-200 w-10 h-10 rounded-full flex justify-center items-center'><CiBasketball className='text-xl font-bold dark:text-black'/></p>
                    <p>Fast Delivery</p>
                </div>

                <div className='flex items-center gap-2'>
                   <p className='bg-green-200 w-10 h-10 rounded-full flex justify-center items-center'> <CiFolderOff className='text-xl font-bold dark:text-black'/></p>
                    <p>Easy Payment method</p>
                </div>


                <div className='flex items-center gap-2'>
                   <p className='bg-lime-200 w-10 h-10 rounded-full flex justify-center items-center'> <CiFolderOff className='text-xl font-bold dark:text-black'/></p>
                    <p>Get Offers</p>
                </div>

            </div>
        </div>
        </section> 
    </>
  )
}

export default Sale
