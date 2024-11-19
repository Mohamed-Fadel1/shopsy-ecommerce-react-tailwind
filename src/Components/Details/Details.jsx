import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { bestProducts } from '../BestProducts/BestProductsData';
import starIcon from "../../assets/star_icon.png";
import starEmpty from "../../assets/star_dull_icon.png";
import { ShopContext } from '../Context/ShopContext';

const Details = () => {
    const {id} = useParams()
    const bestProductsDetails = bestProducts.find((ele)=>ele.id === parseInt(id))

    const {addCart} = useContext(ShopContext)
    
  return (
    <>
        <section className=' dark:bg-gray-900 dark:text-white duration-300'>
        <div className="container py-10 flex flex-col lg:flex-row items-start ">

<div className='flex items-start gap-4 w-full '>
    <div className='flex flex-col gap-2'>
        <img className='w-20' src= {bestProductsDetails.img} alt= {"bestProductsDetailsImg"} />
        <img className='w-20' src= {bestProductsDetails.img} alt= {"bestProductsDetailsImg"} />
        <img className='w-20' src= {bestProductsDetails.img} alt= {"bestProductsDetailsImg"} />
        <img className='w-20' src= {bestProductsDetails.img} alt= {"bestProductsDetailsImg"} />
    </div>
   
    <div>
    <img className='w-[300px]' src= {bestProductsDetails.img} alt= {"bestProductsDetailsImg"} />
    </div>
</div>


<div className='space-y-5'>
    <h3 className='text-3xl leading-tight font-semibold'>{bestProductsDetails.name}</h3>
    <div className='flex items-center gap-2'>
        <img className='w-4' src= {starIcon} alt="starIcon" />
        <img className='w-4' src= {starIcon} alt="starIcon" />
        <img className='w-4' src= {starIcon} alt="starIcon" />
        <img className='w-4' src= {starIcon} alt="starIcon" />
        <img className='w-4' src= {starEmpty} alt="starEmpty" />
    </div>
        <div className='flex items-center gap-3'>
        <p className='text-gray-600 font-semibold line-through text-xl'> ${bestProductsDetails.oldPrice} </p>
        <p className='text-xl font-bold text-secondary'> ${bestProductsDetails.newPrice} </p>
        </div>
    <div className='flex items-center gap-6'>

    </div>

   <p className='text-sm'>A lightweight , usually knitted , pullover shirt, close fifting and with a round neckline and short sleeves ,worm as an undershirt or outer garment. </p>

   <div className='space-y-3'>
    <p className='font-semibold'>select size</p>
    <div className='flex items-center gap-2'>
        <p className='w-6 h-6 bg-gray-100 cursor-pointer p-5 flex justify-center items-center text-sm dark:text-gray-900'>S</p>
        <p className='w-6 h-6 bg-gray-100 cursor-pointer p-5 flex justify-center items-center text-sm dark:text-gray-900'>M</p>
        <p className='w-6 h-6 bg-gray-100 cursor-pointer p-5 flex justify-center items-center text-sm dark:text-gray-900'>L</p>
        <p className='w-6 h-6 bg-gray-100 cursor-pointer p-5 flex justify-center items-center text-sm dark:text-gray-900'>XL</p>
        <p className='w-6 h-6 bg-gray-100 cursor-pointer p-5 flex justify-center items-center text-sm dark:text-gray-900'>XXL</p>
    </div>

    <button 
onClick={() => addCart(bestProductsDetails.id)} 
className='uppercase bg-orange-600 rounded-lg hover:bg-orange-500 duration-200 transition-all text-gray-50 px-8 py-2 active:scale-90'>
Add To Cart
</button>

    <p> <span className='font-bold'>Category</span> : { bestProductsDetails.category} </p>
   </div>
</div>

</div>
        </section>
    </>
  )
}

export default Details
