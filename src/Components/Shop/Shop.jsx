import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';  // تأكد من استيراد هذا الملف

import Hero from '../Hero/Hero';
import Products from '../Products/Products';
import BestProducts from '../BestProducts/BestProducts';
import Sale from '../Sale/Sale';
import Contact from '../Sale/Sale';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';
import Offers from '../Offers/Offers';

import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Aos from 'aos';

const Shop = () => {

  const [up, setUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setUp(true);
      } else {
        setUp(false);
      }
   
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    Aos.init({
      offset : 200,
      duration: 800, 
      easing : "ease-in-sine",
      delay : 100,
      once: false,   
    });
    Aos.refresh();
  }
  
  , []);

  return (
    <main className='relative overflow-x-hidden'>
      {up && (
        <span className='fixed bottom-1 right-3 text-3xl cursor-pointer bg-secondary rounded-full text-white z-30'>
          <a href="#home"><MdKeyboardDoubleArrowUp/></a>
        </span>
      )}
      <Hero  />
      <Products/>
      <BestProducts />
      {/* <Sale/> */}
      <Contact />
      <Offers />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default Shop;
