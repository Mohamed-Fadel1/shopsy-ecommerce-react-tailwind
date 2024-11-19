import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css'; 
import './index.css';
import App from './App';
import ShopContextProvider from './Components/Context/ShopContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
   
  </React.StrictMode>
);

