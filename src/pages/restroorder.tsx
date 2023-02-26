import React, { useEffect, useState } from 'react'
import Link from 'next/link'
const restroorder = () => {
  const [city,setCity] = useState('Patna');
  useEffect(()=>{
    const city = sessionStorage.getItem('CITY');
    setCity(city)
  },[])
    return (
        <>

        {city == 'Patna' ? <>
        <div className="text-center p-1 mt-12" >
     
        
        <h1 className=" text-2xl font-extrabold mb-32  text-black  dark:text-white md:text-2xl lg:text-5xl">Selected City: <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{city}</span></h1>

     </div>
     <div className='p-3 flex   place-items-center bg-white dark:bg-gray-900'>
     <Link href="/"> <div style={{position:"fixed",top:5,left:5}}><button type="button" className="rotate-180 ... text-white dark:text-white border border-white bg-blue-600 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500  dark:hover:text-white dark:focus:ring-blue-800 ">
       <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
     </button> </div>  </Link>
     
       <div className=" hover:transform   hover:scale-110  group relative mx-auto w-72 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
       <Link href="/order"> 
         <div className="hover:border-4 group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
         <div className="hover:bg-black   relative rounded-[15px] bg-gray-900  transition-all duration-500 cursor-pointer   p-6">
           <div className="space-y-4">
             
           {/* <Image className=' object-cover' src={pen2} alt="not found"/> */}
             <p className="text-2xl text-center font-semibold text-white">Order and book<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Seats</span></p>
           </div>
         </div>
         </Link>  
       </div>
       
     
     
     
       <div className=" hover:transform  hover:scale-110 group relative mx-auto w-72 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
        <Link href="/ownerconfirmpage">
        <div className=" group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
         <div className="hover:bg-black  relative rounded-[15px] bg-gray-900  transition-all duration-500 cursor-pointer   p-6">
           <div className="space-y-4">
             
           {/* <Image className='object-cover' src={screen2} alt="not found"/> */}
             <p className="text-2xl text-center font-semibold text-white">Restro<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Owner</span></p>
           </div>
         </div>
         </Link>
       </div>
     
       </div> </>: 
       <center>
        <h1>Sorry we are only available for Patna now</h1>
       </center>
       }
       </>
       )
}

export default restroorder