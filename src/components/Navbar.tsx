import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import {BsBasket3} from 'react-icons/bs'
import { useRef } from 'react'
const Navbar = () => {
   
    const [isOpen, setIsOpen] = useState(false)
    
    const [address,setAddress] = useState('Patna');
   useEffect(()=>{
    sessionStorage.setItem('CITY',address);
   },[address])

   useEffect(()=>{
    const city = sessionStorage.getItem('CITY');
    setAddress(city)
  },[])
//    useEffect(() => {
//     navigator.geolocation.getCurrentPosition(position => {
//       const { latitude, longitude } = position.coords;

//       // use the latitude and longitude to get the user's address
//       fetch(
//         // `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
//         `http://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true/false`

//         )
//         .then(response => response.json())
//         .then(data => {
//             console.log(address)
//           setAddress(data.results[0]);
//         });
//     });
//   }, [location]);
// function location(){
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//           var pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           };
//           // you can use pos to get location
//         }, function() {
//           // handle errors here if any
//         });
//       } else {
//         // Browser doesn't support Geolocation
//       }
// }

   
  return (
    

//     <nav className="nav flex flex-wrap items-center justify-between px-4">
//   <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
//     <svg className="fill-current h-8 mr-2 w-8" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 716 895">
//       <path d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885"></path>
//       <path className="text-white fill-current" d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"></path>
//       <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722"></path>
//     </svg>
//     <span className="font-semibold text-xl tracking-tight">RestrOrder</span>
//   </div>

//   <input className="menu-btn hidden" type="checkbox" id="menu-btn"></input>
//   <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" >
//     <span className="navicon bg-grey-darkest flex items-center relative"></span>
//   </label>

//   <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
//     <li className="border-t md:border-none">
//     <div className='relative flex flex-col items-center w-[240px] rounded-lg bg-white text-black dark:bg-gray-900 dark:text-white'>
//                       <button onClick={() => { setIsOpen((prev) => !prev) }} className=' translate-y-1 bg-gray-100 text-black dark:bg-gray-900 dark:text-white p-1 w-full flex items-center justify-between   rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white '>{address}
//                         {!isOpen ? (
//                           <AiOutlineCaretDown className='h-8' />
//                         ) : (
//                           <AiOutlineCaretUp className='h-8' />

//                         )}
//                       </button>
//                       {isOpen &&
//                         <div className='bg-gray-100 text-black dark:bg-gray-900 dark:text-white  absolute top-16 flex flex-col items-start rounded-lg p-2 w-full'>
//                           <div onClick={() => {
//                             setIsOpen((prev) => !prev)
//                             setAddress('Patna')
//                           }} className=' p-4 flex w-full justify-between hover:text-white hover:bg-blue-600 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black dark:hover:border-l-white border-l-4'>
//                             <h3 >Patna</h3>
//                           </div>

//                           <div onClick={() => {
//                             setIsOpen((prev) => !prev)
//                             setAddress('Delhi')

//                           }} className=' p-4 flex w-full justify-between hover:text-white hover:bg-blue-600 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black dark:hover:border-l-white border-l-4'>
//                             <h3 >Delhi</h3>
//                           </div>
//                           <div onClick={() => {
                            
//                             setIsOpen((prev) => !prev)
//                             setAddress('Mumbai')

//                           }} className=' p-4 flex w-full justify-between hover:text-white hover:bg-blue-600 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black dark:hover:border-l-white border-l-4'>
//                             <h3 >Mumbai</h3>
//                           </div>
//                           <div onClick={() => {
//                             setIsOpen((prev) => !prev)
//                             setAddress('Pune')

//                           }} className=' p-4 flex w-full justify-between hover:text-white hover:bg-blue-600 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black dark:hover:border-l-white border-l-4'>
//                             <h3 >Pune</h3>
//                           </div>
//                           <div onClick={() => {
              
//                             setIsOpen((prev) => !prev)
//                             setAddress('Detecting ...')
//                           }} className=' p-4 flex w-full justify-between hover:text-white hover:bg-red-600 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black dark:hover:border-l-white border-l-4'>
//                             <h3 >Auto</h3>
//                           </div>

//                         </div>
//                       }
//                     </div>

                  
//                     </li>
//     <li className="border-t md:border-none">
//       <a href="/about/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Home</a>
//     </li>
//     <li className="border-t md:border-none">
//       <a href="/about/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Restaurants</a>
//     </li>
//     <li className="border-t md:border-none">
//       <a href="/blog/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Takeaways</a>
//     </li>
    
//     <li className="border-t md:border-none">
//       <a href="/blog/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Login</a>
//     </li>
    
//   </ul>
// </nav>
<div style={{position:"fixed",width:"100%"}}>

<header>
<nav className="navigation">
    <a href="#" className="logo">Restr<span>Order</span></a>
    <ul className="nav-menu">
    <li className="border-t md:border-none">
     <div className='relative flex flex-col items-center w-[240px] rounded-lg bg-white text-black dark:bg-gray-900 dark:text-white'>
                     <button onClick={() => { setIsOpen((prev) => !prev) }} className=' translate-y-1 bg-gray-100 text-black dark:bg-gray-900 dark:text-white p-1 w-full flex items-center justify-between   rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white '>{address}
                       {!isOpen ? (
                          <AiOutlineCaretDown className='h-8' />
                        ) : (
                          <AiOutlineCaretUp className='h-8' />

                        )}
                      </button>
                      {isOpen &&
                        <div className='bg-gray-100 text-black dark:bg-gray-900 dark:text-white  absolute top-16 flex flex-col items-start rounded-lg p-2 w-full'>
                          <div onClick={() => {
                            setIsOpen((prev) => !prev)
                            setAddress('Patna')
                          }} className=' p-4 flex w-full justify-between hover:text-white hover:bg-blue-600 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black dark:hover:border-l-white border-l-4'>
                            <h3 >Patna</h3>
                          </div>

                          <div onClick={() => {
                            setIsOpen((prev) => !prev)
                            setAddress('Delhi')

                          }} className=' p-4 flex w-full justify-between hover:text-white hover:bg-blue-600 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black dark:hover:border-l-white border-l-4'>
                            <h3 >Delhi</h3>
                          </div>
                          <div onClick={() => {
                            
                            setIsOpen((prev) => !prev)
                            setAddress('Mumbai')

                          }} className=' p-4 flex w-full justify-between hover:text-white hover:bg-blue-600 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black dark:hover:border-l-white border-l-4'>
                            <h3 >Mumbai</h3>
                          </div>
                          <div onClick={() => {
                            setIsOpen((prev) => !prev)
                            setAddress('Pune')

                          }} className=' p-4 flex w-full justify-between hover:text-white hover:bg-blue-600 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black dark:hover:border-l-white border-l-4'>
                            <h3 >Pune</h3>
                          </div>
                          <div onClick={() => {
              
                            setIsOpen((prev) => !prev)
                            setAddress('Detecting ...')
                          }} className=' p-4 flex w-full justify-between hover:text-white hover:bg-red-600 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black dark:hover:border-l-white border-l-4'>
                            <h3 >Auto</h3>
                          </div>

                        </div>
                      }
                    </div>

                  
                    </li>
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">Restaurants</a></li>
        <li className="nav-item"><Link href="/ownerconfirmpage">Owner</Link></li>
        <a href="#" className="nav-btn">Log In</a>
        <Link href='/myorder'>
<BsBasket3 size={30}/>
</Link>
    </ul>
    <div className="menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </div>
</nav>
</header>
</div>
  
  )
}

export default Navbar