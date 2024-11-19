import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import LayOut from './Components/LayOut/LayOut'
import Shop from './Components/Shop/Shop'
import Cart from './Components/Cart/Cart'
import Details from './Components/Details/Details'



const App = () => {
  const routes = createHashRouter([
    { path : "" , element : <LayOut/> , children : [
      {path : "shop" , element : <Shop/>} ,


      {index : true , element : <Shop/>} ,
      {path : "cart" , element : <Cart/>} ,
      {path : "details/:id" , element : <Details/>} ,
    ]
      
      
    }
  ]) 
  return (
   <>
  <RouterProvider router={routes}>  </RouterProvider>
   </>
  )
}

export default App
