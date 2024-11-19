import React from 'react';
import { testimonialsData } from './TestimonialData';
import Slider from 'react-slick';

const Testimonial = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,    

        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000 ,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

  return (
    <>
      <section  className='dark:bg-gray-900 dark:text-white'>
        <div className="container py-28">
            <div>
            <div className='text-center space-y-3'>
        <h4 className='text-secondary font-semibold'>What our customers are saying</h4>
        <h2 className='text-3xl font-bold'>Testimonials</h2>
        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
        </div>

            </div>
        </div>

       <div className='lg:m-6 m-4'>
       <Slider {...settings}>
            {testimonialsData.map((ele)=>(
                <div key={ele.id} className='px-4'>
                 <div className='flex flex-col space-y-4 p-8 shadow-lg rounded-2xl bg-orange-50 dark:bg-gray-800'>
                 <div className='flex items-center justify-between'>
                    <img className='w-20 h-20 rounded-full' src= {ele.img} alt= {ele.name} />
                    <p className='text-8xl text-gray-400'>،،</p>
                       
                    </div>

                    <p className='text-sm text-gray-500'>{ele.text}</p>
                    <h6 className='text-2xl font-bold'> {ele.name} </h6>
                 </div>
                </div>
            ))}

        </Slider>
       </div>
      </section>
    </>
  )
}

export default Testimonial
