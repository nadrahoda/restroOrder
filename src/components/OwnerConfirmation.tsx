import React from 'react'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import { Button } from 'flowbite-react'
import { useRouter } from 'next/router'
const OwnerConfirmation = () => {
  const router  = useRouter()
    useEffect(()=>{
        const restaurant = sessionStorage.getItem('RESTAURANT')
        const table = sessionStorage.getItem('TABLE_SELECTED');
        const food = sessionStorage.getItem('FOOD_SELECTED')
        const confirm = sessionStorage.getItem('STATUS')
       setRestaurant(restaurant)
        setTable(table)
        setFood(food)
       },[])

      const [restaurant,setRestaurant] = useState('');
      const [table,setTable] = useState('');
      const [food,setFood] = useState('');
      const [confirm,setconfirm] = useState('Pending')
       function confirmOrder(){
        sessionStorage.setItem('STATUS','Confirmed')
        alert('Order is confirmed')
        router.push('/')
       }
       function rejectOrder(){
        sessionStorage.setItem('STATUS','Rejected')
        alert('Order is Rejected')

        router.push('/')

       }
      return (
        <>
        <Link href="/restroorder"> <div style={{position:"fixed",top:5,left:5}}><button type="button" className="rotate-180 ... text-white dark:text-white border border-white bg-blue-600 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500  dark:hover:text-white dark:focus:ring-blue-800 ">
         <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
       </button> </div>  </Link>
     <center>
       <h1 className="mt-32 text-2xl font-extrabold mb-32  text-black  dark:text-white md:text-2xl lg:text-5xl"> <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Confirm Order</span></h1>
       <h1 className=" text-2xl font-extrabold mb-32  text-black  dark:text-white md:text-2xl lg:text-5xl">Restaurant: <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{restaurant}</span></h1>
    
       <h1 className=" text-2xl font-extrabold mb-32  text-black  dark:text-white md:text-2xl lg:text-5xl">Table: <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{table}</span></h1>
    
       <h1 className=" text-2xl font-extrabold mb-32  text-black  dark:text-white md:text-2xl lg:text-5xl">Food: <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> {food}</span></h1>
    
       <div className=''>
        <Button onClick={confirmOrder} className='justify-center mt-12 items-center text-center' gradientMonochrome="info">
      Confirm
    </Button>
    <Button  color="failure" onClick={rejectOrder} className=' justify-center mt-12 items-center text-center'>
      Reject
    </Button>
</div>

    </center>
    </>
    

  )
}

export default OwnerConfirmation