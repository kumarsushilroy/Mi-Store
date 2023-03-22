import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
// import {logo} from '../data/data.json'
import '../Style/Navbar.css';
import data from '../data/data.json';



function Navbar() {

    const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkMY18oHsJSH1wVgK7Xbixd08u0vUc6SF-7g&usqp=CAU'
    // const res = data;
    // const resp = [...data.accessories, ...data.laptop, ...data.miPhones, ...data.redmiPhones]
    // console.log(resp)
    // const [val , setval] = useState(data)

    const search = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z" /></svg>

    // const [srch , setsearch] = useState();
    // console.log(srch)


    const [toggle , settoggle] = useState(!false)

    return (
        <div className='sticky top-0 z-[1]'>
            <div className='bg-orange-500 text-white  p-3'>


                <div className="flex justify-between ">

                    <div className="logo">

                    <NavLink className='' to={'/'}>
                        <span className='flex'><img  className='w-10' src={`${logo} `} alt="" /><h1 className='ml-2'>Home Page</h1></span>
                        </NavLink> 
                        

                    </div>
                    <div className='  lg:flex hidden'>
                        <NavLink className="NavLinks" to={'/miphone'}><h1 className='  hover:opacity-80 px-3'>Mi Phones</h1></NavLink>
                        <NavLink className="NavLinks" to="/redmiphones"><h1 className='px-3'>Redmi Phones</h1></NavLink>
                        <NavLink className="NavLinks" to="/tv"><h1 className='px-3'>TV</h1></NavLink>
                        <NavLink className="NavLinks" to="/laptops"><h1 className='px-3'>Laptops</h1></NavLink>
                        <NavLink className="NavLinks" to="/lifestyle"><h1 className='px-3'>Fitness & Lifestyle</h1></NavLink>
                        <NavLink className="NavLinks" to="/home"><h1 className='px-3'>Home</h1></NavLink>
                        <NavLink className="NavLinks" to="/audio"><h1 className='px-3'>Radio</h1></NavLink>
                        <NavLink className="NavLinks" to="/navacces"><h1 className='px-3'>Accessories</h1></NavLink>

                    </div>

                    <div className='md:hidden'>
                        {
                            toggle ?<AiOutlineMenu size={20} onClick={()=>settoggle(false)} /> : <AiOutlineClose size={20} onClick={()=>settoggle(true)} />
                        }
                        

                    </div>

                    <div className={toggle ? 'ml[-100px] fixed hidden' : 'fixed z-10 pt-24 left-0 top-0 p-3 w-[60%] border-r bg-gray-400 duration-500' }>
                    <div className=' second md:flex '>
                        <NavLink className="NavLinks" to={'/miphone'}><h1 className='  hover:bg-white duration-300 p-2 rounded '>Mi Phones</h1></NavLink>
                        <NavLink className="NavLinks" to="/redmiphones"><h1 className='hover:bg-white p-2 rounded duration-300'>Redmi Phones</h1></NavLink>
                        <NavLink className="NavLinks" to="/tv"><h1 className='hover:bg-white p-2 rounded duration-300'>TV</h1></NavLink>
                        <NavLink className="NavLinks" to="/laptops"><h1 className='hover:bg-white p-2 rounded duration-300'>Laptops</h1></NavLink>
                        <NavLink className="NavLinks" to="/lifestyle"><h1 className='hover:bg-white p-2 rounded duration-300'>Fitness & Lifestyle</h1></NavLink>
                        <NavLink className="NavLinks" to="/home"><h1 className='hover:bg-white p-2 rounded duration-300'>Home</h1></NavLink>
                        <NavLink className="NavLinks" to="/audio"><h1 className='hover:bg-white p-2 rounded duration-300'>Radio</h1></NavLink>
                        <NavLink className="NavLinks" to="/navacces"><h1 className='hover:bg-white p-2 rounded duration-300'>Accessories</h1 ></NavLink>

                    </div>
                    </div>


                </div>
            </div>

            {/* <div className="searchIcon col-md-3 d-flex">
                <input value={srch} onChange={(e)=>setsearch(e.target.value)} placeholder='search here..' type="text" />
                <span className='srch'>{srch}</span>

            </div> */}

            <div>
                {/* {
                    resp.filter((item) => {
                        return srch === '' ? item : item.name.toLowerCase().includes(srch)
                    }).map((item,i)=>{
                        return(
                            <h1>{item.name}</h1>
                        )
                    })
                } */}
            </div>

        </div>
    )
}

export default Navbar