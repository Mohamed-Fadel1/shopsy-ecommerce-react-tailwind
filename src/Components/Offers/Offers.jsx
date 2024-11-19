import React from 'react';
import offersImg from "../../assets/exclusive_image.png"

const Offers = () => {
  return (
    <>
    <section className=' dark:bg-gray-900 dark:text-white'>
    <div data-aos = "zoom-in"  data-aos-delay="200" className="container py-10 ">

<div className='flex flex-col lg:flex-row items-center justify-around bg-gradient-to-t from-white to-secondary/85 dark:from-gray-400 dark:to-gray-800 text-center lg:text-left py-10'>
<div>
    <h1 className=' text-3xl lg:text-6xl font-bold'>Exclusive</h1>
    <h1 className=' text-3xl lg:text-6xl font-bold my-4'>Offers For You</h1>
    <p className='text-xl uppercase'>only on best sellers products</p>
    <button className='text-white bg-red-600 hover:bg-red-500 transition-all duration-200 px-10 py-2 rounded-full mt-4'>Check now</button>
</div>

<div>
<img className=' w-1/2 m-auto lg:m-0 lg:w-3/4' src= {offersImg} alt="offersImg" />
</div>
</div>

</div>
    </section>
    </>
  )
}

export default Offers
