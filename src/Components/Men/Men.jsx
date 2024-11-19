import React from 'react'
import { Link } from 'react-router-dom';
import { menProducts } from "./MenData";
import bannerMen from "../../assets/banner_mens.png";
import dropDown from "../../assets/dropdown_icon.png"
const Men = () => {
  return (
    <>
       <div className="container my-8">
      <img src= {bannerMen} alt="bannerMen" />
      <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 items-center justify-between mt-6 mb-3">
        <p> <span className="font-bold">Showing 1 - 12 </span> out of 54 products </p>

        <div className="flex items-center gap-2 border border-black rounded-full  px-4 py-1 cursor-pointer">
          <p>sort by</p>
          <img src= {dropDown} alt="dropDown" />
        </div>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-2'>
        {menProducts.map((ele, index) => {
          return (
            <div key={index} className="p-4 space-y-4 cursor-pointer hover:scale-105 duration-200 transition-all">
              <Link to={`/details/${ele.id}`}>
              <img src={ele.image} alt="popularImg" />
              <p>{ele.name}</p>
              <div className="flex items-center space-x-4">
                <span className="font-bold">{ele.new_price}</span>
                <span className="text-gray-500 line-through">{ele.old_price}</span>
              </div>
              </Link>
            </div>
          );
        })}
        </div>

        <button className="bg-gray-200 px-8 py-2 rounded-full m-auto block my-10">Explore More</button>
      </div>
    </>
  )
}

export default Men
