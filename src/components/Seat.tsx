import React, { useEffect, useState } from 'react'
import { Button,Modal } from 'flowbite-react';
import Link from 'next/link';
const Seat = () => {
 const [selected,setSelected] = useState('');
 const table = ()=>{
 sessionStorage.setItem('TABLE_SELECTED',selected)
 }
 const [restro,setRestro] = useState('')

  return (
<>

<Link href="/restroorder"> <div style={{position:"fixed",top:5,left:5}}><button type="button" className="rotate-180 ... text-white dark:text-white border border-white bg-blue-600 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500  dark:hover:text-white dark:focus:ring-blue-800 ">
       <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
     </button> </div>  </Link>
<h1 className="mt-12 text-center text-2xl font-extrabold mb-32  text-black  dark:text-white md:text-2xl lg:text-5xl">Select your<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Seats</span></h1>

<div className="flex flex-wrap gap-2 items-center justify-center">
  
  <Button.Group>
    <Button onClick={()=>{setSelected('1')}} gradientMonochrome="info">
    1
    </Button>
    <Button onClick={()=>{setSelected('2')}} gradientMonochrome="info">
 2
    </Button>
    <Button onClick={()=>{setSelected('3')}} gradientMonochrome="info">
      3
    </Button>
    <Button onClick={()=>{setSelected('4')}} gradientMonochrome="info">
      4
    </Button>
       <Button onClick={()=>{setSelected('5')}} gradientMonochrome="info">

      5
    </Button>
       <Button onClick={()=>{setSelected('6')}} gradientMonochrome="info">

      6
    </Button>
       <Button onClick={()=>{setSelected('7')}} gradientMonochrome="info">

      7
    </Button>
  </Button.Group>
  
</div>
<div className="flex mt-2 flex-wrap gap-2 items-center justify-center">
  
  <Button.Group>
       <Button onClick={()=>{setSelected('8')}} gradientMonochrome="info">

      8
    </Button>
       <Button onClick={()=>{setSelected('9')}} gradientMonochrome="info">

      9
    </Button>
       <Button onClick={()=>{setSelected('10')}} gradientMonochrome="info">

      10
    </Button>
       <Button onClick={()=>{setSelected('11')}} gradientMonochrome="info">

      11
    </Button>
       <Button onClick={()=>{setSelected('12')}} gradientMonochrome="info">

      12
    </Button>
       <Button onClick={()=>{setSelected('13')}} gradientMonochrome="info">

      13
    </Button>
       <Button onClick={()=>{setSelected('14')}} gradientMonochrome="info">

      14
    </Button>
  </Button.Group>
  
</div>
<div className="flex mt-2 flex-wrap gap-2 items-center justify-center">
  
  <Button.Group>
       <Button onClick={()=>{setSelected('15')}} gradientMonochrome="info">

      15
    </Button>
       <Button onClick={()=>{setSelected('16')}} gradientMonochrome="info">

      16
    </Button>
       <Button onClick={()=>{setSelected('17')}} gradientMonochrome="info">

      17
    </Button>
       <Button onClick={()=>{setSelected('18')}} gradientMonochrome="info">

      18
    </Button>
       <Button onClick={()=>{setSelected('19')}} gradientMonochrome="info">

      19
    </Button>
       <Button onClick={()=>{setSelected('20')}} gradientMonochrome="info">

      20
    </Button>
       <Button onClick={()=>{setSelected('21')}} gradientMonochrome="info">

     21
    </Button>
  </Button.Group>
  
</div>

<h1 className='mt-12 text-center'>Selected Seat: {selected}</h1>
<div className=''>
    <Link href="/selectfood">
   {selected!='' && 
  <center>  <Button onClick={table} className='justify-center mt-12 items-center text-center' gradientMonochrome="info">
      Continue
    </Button></center>}
    </Link>
  </div>
</>
  )
}

export default Seat