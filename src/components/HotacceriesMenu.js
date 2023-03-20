import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Hotaccesories.css'

function HotacceriesMenu() {
  return (

     <div>
      <h1 className='text-center underline py-3 font-bold text-2xl text-blue-500'>MENU</h1>
    <div className='menu py-3 w-full md:flex-row  flex-col '>
      
      <Link to="/music" className='menu-link text-sm py-2'>Music Store</Link>
      <Link to="/smartDevices" className='menu-link text-sm py-2'>Smart Devices</Link>
      <Link to="/Home" className='menu-link text-sm py-2'>Home</Link>
      <Link to="/lifestyle" className='menu-link text-sm py-2'>Lifestyle</Link>
      <Link to="/mobileAccessories" className='menu-link text-sm py-2'>Mobile Accessories</Link>
    </div>
    </div>
  )
}

export default HotacceriesMenu