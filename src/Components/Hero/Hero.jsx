import React from 'react';
import img1 from "../../assets/women.png";
import img2 from "../../assets/shopping.png";
import img3 from "../../assets/sale.png";
import Slider from 'react-slick';

const Hero = () => {
  const imageSlide = [
    {
      id: 1,
      img: img1,
      title: "Upto 50% off on all men's wear.",
      desc: "His life dolor sit, amet consectetur adipisicing elit. Quas cumque accusantium inventore hic nihil, voluptatem maiores laborum ad dolorum harum velit soluta modi sed"
    },
    {
      id: 2,
      img: img2,
      title: "30% off on all women's wear.",
      desc: "whoes there dolor sit, amet consectetur adipisicing elit. Quas cumque accusantium inventore hic nihil, voluptatem maiores laborum ad dolorum harum velit soluta modi sed"
    },
    {
      id: 3,
      img: img3,
      title: "70% off on all product's sale",
      desc: "consicture sit, amet consectetur adipisicing elit. Quas cumque accusantium inventore hic nihil, voluptatem maiores laborum ad dolorum harum velit soluta modi sed "
    }
  ];

  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <>
      <div  className="relative overflow-hidden min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-300 py-20">
        <div className="w-[700px] h-[700px] lg:w-[650px] lg:h-[650px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>

        <div className="container">
          <Slider {...settings}>
            {imageSlide.map((ele) => {
              return (
                <div key={ele.id}>
                 
                  <div data-aos="fade-right" className=" grid lg:grid-cols-2 items-center justify-between space-y-8 lg:space-y-0">
                    
                    <div className="text-center lg:text-left space-y-4">
                      <h2 className="text-4xl lg:text-6xl font-bold">{ele.title}</h2>
                      <p className="text-sm md:text-md">{ele.desc}</p>
                      <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:scale-105">Order Now</button>
                    </div>

                 
                    <div  className="relative">
                      <img className="w-[500px] h-auto" src={ele.img} alt="imgHero" />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Hero;
