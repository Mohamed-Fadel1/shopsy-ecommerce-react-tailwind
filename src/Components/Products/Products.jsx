import React from 'react';
import { productsdata } from './ProductsData';
import { IoIosStar } from "react-icons/io";


const Products = () => {
  return (
    <>
      <section className='dark:bg-gray-900 dark:text-white'>
      <div className="container py-28">
        <div className='text-center space-y-3'>
        <h4 data-aos = "fade-up" className='text-secondary font-semibold'>Top Selling Products for you</h4>
        <h2 data-aos = "fade-up" className='text-3xl font-bold'>Products</h2>
        <p data-aos = "fade-up" className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-5 mt-10 gap-10'>
            {productsdata.map((product , index)=>
            (
          
                <div 
                data-aos = "fade-up"
                data-aos-delay ={index * 200}

                className=' cursor-pointer' key={product.id}>
                    <img className='h-[200px] w-full ' src= {product.img} alt= {product.name} />
                    <h5 className='font-bold'>{product.name}</h5>
                    <p className='text-gray-500'> {product.color} </p>
                    <div className='flex items-center gap-1'>
                        <p> {product.rate} </p>
                        <IoIosStar className='text-yellow-400 text-lg'/>
                    </div>
                </div>
          
            ))}
        </div>

        <button className='px-6 py-2 text-white rounded-lg m-auto block mt-10 bg-secondary hover:bg-orange-400 dura '>View All Button</button>
      </div>
      </section>
    </>
  )
}

export default Products
