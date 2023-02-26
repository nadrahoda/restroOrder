import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from 'flowbite-react';
const SelectRestaurants = () => {
  const [restaurant,setRestaurant] = useState('');
  function submit(){
    sessionStorage.setItem('RESTAURANT',restaurant);
  }
  return (
    <>
        
    <div className="text-center p-1 mt-12" >
 
    <div>
    <h1 className=" text-2xl font-extrabold mb-32  text-black  dark:text-white md:text-2xl lg:text-5xl">Select your<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Restaurants</span></h1>
 </div>
 <h1 className=" text-2xl font-extrabold mb-32  text-black  dark:text-white md:text-2xl lg:text-5xl">Selected Restaurant: <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{restaurant}</span></h1>
<center>
 <div className="font-sans w-fit  justify-center items-center text-black  bg-white flex ">

  <div className="border rounded overflow-hidden flex">

    <input type="text" className="px-4 py-2" placeholder="Search..."></input>
    <button className="flex items-center justify-center px-4 border-l">
      <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
    </button>
  </div>

</div>
</center>
 <div className='p-3 flex mt-24  place-items-center bg-white dark:bg-gray-900'>
 <Link href="/"> <div style={{position:"fixed",top:5,left:5}}><button type="button" className="rotate-180 ... text-white dark:text-white border border-white bg-blue-600 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500  dark:hover:text-white dark:focus:ring-blue-800 ">
   <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
 </button> </div>  </Link>
 
   
 
 
 
   <div onClick={()=>{setRestaurant('Sayesha') 
   submit()}} className=" hover:transform  hover:scale-110 group relative mx-auto w-72 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
   
    <div className=" group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
     <div className="hover:bg-black  relative rounded-[15px] bg-gray-900  transition-all duration-500 cursor-pointer   p-6">
       <div className="space-y-4">
         
       <img className='object-cover' src='https://b.zmtcdn.com/data/pictures/2/19896992/926f4e30123937481350ef961547deda.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*' alt="not found"/>
         <p className="text-2xl text-center font-semibold text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Sayesha</span></p>
       </div>
     </div>

   </div>
   <div onClick={()=>{setRestaurant('Pind Balluchi')}} className=" hover:transform  hover:scale-110 group relative mx-auto w-72 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
    <div  className=" group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
     <div className="hover:bg-black  relative rounded-[15px] bg-gray-900  transition-all duration-500 cursor-pointer   p-6">
       <div className="space-y-4">
         
       <img className='object-cover' src='https://media-cdn.tripadvisor.com/media/photo-s/18/d5/ee/cf/pind-balluchi.jpg' alt="not found"/> 
         <p className="text-2xl text-center font-semibold text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Pind Balluchi</span></p>
       </div>
     </div>
   </div>
   <div onClick={()=>{setRestaurant('Somen 19')}} className=" hover:transform  hover:scale-110 group relative mx-auto w-72 overflow-hidden rounded-[16px-] bg-gray300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
    <div className=" group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
     <div className="hover:bg-black  relative rounded-[15px] bg-gray-900  transition-all duration-500 cursor-pointer   p-6">
       <div className="space-y-4">
         
       <img className='object-cover' src='data:image/jpeg;base64,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' alt="not found"/>
         <p className="text-2xl text-center font-semibold text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Somen 19</span></p>
       </div>
     </div>
   </div>
   
   </div>
   <div className='p-3 flex   place-items-center bg-white dark:bg-gray-900'>
    
 
 
   
 
 
{/*  
   <div onClick={()=>{setRestaurant('Pukhtaan')}} className=" hover:transform  hover:scale-110 group relative mx-auto w-72 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
    <Link href="/restro">
    <div className=" group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
     <div className="hover:bg-black  relative rounded-[15px] bg-gray-900  transition-all duration-500 cursor-pointer   p-6">
       <div className="space-y-4">
         
         <p className="text-2xl text-center font-semibold text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Pukhtaan</span></p>
       </div>
     </div>
     </Link>
   </div>
   <div onClick={()=>{setRestaurant('Aasman')}} className=" hover:transform  hover:scale-110 group relative mx-auto w-72 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
    <Link href="/order">
    <div className=" group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
     <div className="hover:bg-black  relative rounded-[15px] bg-gray-900  transition-all duration-500 cursor-pointer   p-6">
       <div className="space-y-4">
         
         <p className="text-2xl text-center font-semibold text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Aasman</span></p>
       </div>
     </div>
     </Link>
   </div>
   <div onClick={()=>{setRestaurant('Bollywood treats')}} className=" hover:transform  hover:scale-110 group relative mx-auto w-72 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
    <Link href="/restro">
    <div className=" group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
     <div className="hover:bg-black  relative rounded-[15px] bg-gray-900  transition-all duration-500 cursor-pointer   p-6">
       <div className="space-y-4">
         
         <p className="text-2xl text-center font-semibold text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Bollywood treats</span></p>
       </div>
     </div>
     </Link>
   </div> */}
   
   </div>
   <div className=''>
    <Link href="/restroorder">
   {restaurant!='' && 
  <center>  <Button onClick={submit} className='justify-center mt-12 items-center text-center' gradientMonochrome="info">
      Continue
    </Button></center>}
    </Link>
  </div>
   </div>
   </>
  )
}

export default SelectRestaurants