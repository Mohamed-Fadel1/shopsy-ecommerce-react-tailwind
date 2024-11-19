import React from 'react';
import contactImg from "../../assets/orange-pattern.jpg"

const Contact = () => {

  const bannerImage = {
    backgroundImage : `url(${contactImg})`,
    backgroundPosition : "center",
    backgroundRepeat : "no-repeat",
    backgroundSize : "cover",
    height :"100%",
    width :"100%"
  }
  return (
    <>
      <section className='dark:bg-gray-900 text-white' style={bannerImage}>
          <div className="container py-10 backdrop-blur-sm">
            <div className='text-center'>
              <h2 className=' text-2xl font-semibold lg:text-4xl '>Get Notified About New Products</h2>
              <input type="email" className=' w-full lg:w-1/2 h-12 px-3 mt-6' placeholder='Enter Your Email' />
            </div>
          </div>
      </section>
    </>
  )
}

export default Contact
