import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { bestProducts } from '../BestProducts/BestProductsData';
import close from "../../assets/cart_cross_icon.png"
import { Link } from 'react-router-dom';


const Cart = () => {
  const {cartItems , removeItem , clearAllItems} = useContext(ShopContext);

  const total = bestProducts.reduce((acc, product) => {
    return acc + (cartItems[product.id] || 0) * product.newPrice;
  }, 0);
  
  
  
  

  return (
    <>
      <section className='dark:bg-gray-900 dark:text-white duration-300 min-h-screen'>
        <div className="container">
          <div className='flex items-center justify-between'>
          <Link to={"/shop"}><button className='text-white bg-secondary px-6 py-2 rounded-lg my-4 hover:bg-orange-500 active:scale-95 duration-200'> Back To Shop </button></Link>
          <button onClick={()=>{clearAllItems()}} className='text-white bg-secondary px-6 py-2 rounded-lg my-4 hover:bg-orange-500 active:scale-95 duration-200'>Clear All</button>
          </div>
          <div>
            {bestProducts.map((ele)=>{
              if (cartItems[ele.id] > 0) {
                return (
                  <div className='flex items-center flex-col md:flex-row space-y-3 md:space-y-0 lg:gap-20 border-b-2 p-2' key={ele.id}>
                    <img className='w-[50px]' src= {ele.img} alt= {ele.name} />
                      <p className='text-xl font-bold'>Name : <span className='text-secondary'> {ele.name} </span></p>
                      <p className='text-xl font-bold'>Price : <span className='text-secondary'> ${ele.newPrice} </span></p>
                      <p className='text-xl font-bold'>Quantity : <span className='text-secondary'> {cartItems[ele.id]} </span></p>
                      <p className='text-xl font-bold'>Total : <span className='text-secondary'> {(cartItems[ele.id])*ele.newPrice} </span></p>
                      <p onClick={()=>{removeItem(ele.id)}} className="font-bold text-xl cursor-pointer"> <img src= {close} alt="close" /> </p>

                  </div>
                )
              }
            })}
          </div>

          <p className='mt-8 text-4xl font-bold'> Total: <span className='text-secondary'>{total}</span> </p>
        </div>

      </section>
    </>
  )
}

export default Cart
