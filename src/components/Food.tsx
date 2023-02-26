import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Button } from 'flowbite-react';
const Food = () => {
    const [table,setTable] = useState();
    const [food,setFood] = useState('')
    const foodOrder = ()=>{
     
            sessionStorage.setItem('FOOD_SELECTED',food)
        
    }
    useEffect(()=>{
       const data = sessionStorage.getItem('TABLE_SELECTED')
       setTable(data)
    },[])
  return (
    <>
      <Link href="/order"> <div style={{position:"fixed",top:5,left:5}}><button type="button" className="rotate-180 ... text-white dark:text-white border border-white bg-blue-600 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500  dark:hover:text-white dark:focus:ring-blue-800 ">
       <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
     </button> </div>  </Link>
    <div>
 
           <header>
          <h2 className="text-gray-700 text-6xl text-center mt-12 font-semibold">Menu</h2>
          <h3 className="text-2xl text-center mt-6 font-semibold">Selected table: {table}</h3>
          <h3 className="text-2xl text-center mt-6 font-semibold">Selected Food: {food}</h3>

        </header>
        <div className="mx-12">
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>
          <div className="mt-8 grid lg:grid-cols-3 gap-10">
            <div className="card hover:shadow-lg" onClick={()=>{setFood('Bean Chilli Stew')}}>
              <img
                src="https://i.ibb.co/tpCdNcX/stew.jpg"
                alt="stew"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4" >
                <span className="font-bold">5 Bean Chilli Stew</span>
                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
              <div className="badge">
                <svg
                  className="w-5 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
            <div className="card hover:shadow-lg" onClick={()=>{setFood('Veg Noodles')}}>
              <img
                src="https://i.ibb.co/b1DQyfG/noodles.jpg"
                alt="noodles"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4" >
                <span className="font-bold">Veg Noodles</span>
                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
              <div className="badge">
                <svg
                  className="w-5 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>15 mins</span>
              </div>
            </div>
            <div className="card hover:shadow-lg" onClick={()=>{setFood('Tofu Curry')}}>
              <img
                src="https://i.ibb.co/ZdP6cKQ/curry.jpg"
                alt="curry"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4" >
                <span className="font-bold">Tofu Curry</span>
                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
              <div className="badge">
                <svg
                  className="w-5 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>30 mins</span>
              </div>
            </div>
          </div>
          </div>
          <div className="mx-12">
          
          <div className="mt-8 grid lg:grid-cols-3 gap-10">
            <div className="card hover:shadow-lg" onClick={()=>{setFood('Chicken Lollipop')}}>
              <img
                src="https://nithisclickncook.com/wp-content/uploads/2021/06/Chicken-Lollipop-6.jpg"
                alt="stew"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4" >
                <span className="font-bold">Chicken Lollipop</span>
                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
              <div className="badge">
                <svg
                  className="w-5 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
            <div className="card hover:shadow-lg" onClick={()=>{setFood('Momo')}}>
              <img
                src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202302/momo_0-sixteen_nine.jpg"
                alt="noodles"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4" >
                <span className="font-bold">Momo</span>
                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
              <div className="badge">
                <svg
                  className="w-5 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>15 mins</span>
              </div>
            </div>
            <div className="card hover:shadow-lg" onClick={()=>{setFood('Pizza')}}>
              <img
                src="https://im.hunt.in/cg/Patna/City-Guide/Pizzas.jpg"
                alt="curry"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4" >
                <span className="font-bold">Pizza</span>
                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
              <div className="badge">
                <svg
                  className="w-5 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>30 mins</span>
              </div>
            </div>
          </div>
          </div>
    </div>
    <div className=''>
    <Link href="/confirmorder">
   {food!='' && 
  <center>  <Button onClick={foodOrder} className='justify-center mt-12 items-center text-center' gradientMonochrome="info">
      Continue
    </Button></center>}
    </Link>
  </div>
    </>
  )

}

export default Food