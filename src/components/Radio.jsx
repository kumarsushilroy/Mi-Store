import React from 'react';
import data from '../data/data.json';
import { useState } from 'react';

const Radio = () => {

    const val = data.audio;
    const [state, setstate] = useState(val)
    console.log(val)

  return (
    <div className='w-full h-full mt-4'>
    <div className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-4 md:grid-cols-3">
        {
            state.map((item,i)=>{
                return(
                    <div className='border p-4 '>
                        <img className='w-50' src={item.image} alt="" />
                        <div className='flex justify-around items-center'>
                        <h1>{item.name}</h1>
                        <button className='border py-2 px-4 rounded'>Buy Now</button>
                        <h1>{item.price}</h1>
                        </div>
                        
                    </div>
                )
            })
        }
    </div>
</div>
  )
}

export default Radio