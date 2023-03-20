import React from 'react'
import Offer from './Offer';
import '../Style/Offers.css'

function Offers({offr}) {
  return (
    <div className='offer-main-section'>
        {
            offr.map((item,index)=>{
                return(
                    <Offer key={index} index={index} src={item.image} link={item.url}/>
                )
            })
        }
        
    </div>
  )
}

export default Offers;
