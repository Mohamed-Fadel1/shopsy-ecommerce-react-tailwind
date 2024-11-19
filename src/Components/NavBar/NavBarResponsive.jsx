import React from 'react';

const links = [
    {
      id : 1,
      name:"Home",
      link :"#"
    } ,
    {
      id : 2,
      name:"Top Rated",
      link :"#"
    } ,
    {
      id : 3,
      name:"Kids Wear",
      link :"#"
    } ,
    {
      id : 4,
      name:"Mens Wear",
      link :"#"
    } ,
    {
      id : 5,
      name:"Electronics",
      link :"#"
    } ,

    {
      id : 6,
      name:"Trednding Products",
      link :"#"
    } ,
  ]
const NavBarResponsive = ({open}) => {
  return (
    <>
    {open && (
         <div className=' absolute w-full h-screen text-center py-4 z-50'>
         <ul className=' lg:hidden flex flex-col gap-4 bg-white dark:bg-colorDark dark:text-white duration-300 py-4 m-4 rounded-2xl text-lg font-semibold  '>
           {links.map((ele)=>{
             return (
               <li className='hover:text-secondary font-semibold duration-150' key={ele.id}> <a href= {ele.link}> {ele.name} </a> </li>
             )
           })}
   
         </ul>
         </div>
    )}
    </>
  )
}

export default NavBarResponsive
