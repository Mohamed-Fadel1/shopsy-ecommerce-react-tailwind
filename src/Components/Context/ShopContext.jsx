import { createContext, useEffect, useState} from "react";
import { bestProducts } from "../BestProducts/BestProductsData";

export const ShopContext = createContext();




    function getCartDefault  (){

        let storeProducts = localStorage.getItem("cartItem");

        if (storeProducts) {
            return JSON.parse(storeProducts)
                }
        let cart = {};

        bestProducts.forEach(element => {
        
        
            cart[element.id] = 0
            
        });

        return cart
        
    }




const ShopContextProvider = (props) => {

        const [cartItems , setCartItems] = useState(getCartDefault())

        useEffect(()=>{
            localStorage.setItem("cartItem" , JSON.stringify(cartItems))
        },[cartItems])
    

    
        
    const addCart = (itemId)=>{
        setCartItems((prev)=>(
            {...prev , [itemId]: prev[itemId] +1}

        ))

        console.log(cartItems);
    }

    const removeItem = (itemId)=>{
        setCartItems((prev)=>(
            { ...prev , [itemId] : prev[itemId] -1 }
        ))
    }

    const totalItems = ()=>{
        return Object.values(cartItems).reduce((acc , ele)=> acc + ele , 0)
    }

    const clearAllItems = ()=>{
        let cart = {} ;

        bestProducts.forEach(element => {
            cart[element.id] = 0
        });

        setCartItems(cart)
    }

    return <ShopContext.Provider value={{addCart , cartItems , removeItem , totalItems , clearAllItems}}>
        {props.children}
    </ShopContext.Provider>
};

export default ShopContextProvider;
