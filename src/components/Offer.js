import React from 'react'
import '../Style/Offr.css'

const Offer = ({src,index,link}) => {
  return(  
  
  <div className='offersSection'>
   
        <a href={link}>
            <img src={src} alt={`${index} offer`} />
        </a>
    </div>
    
  )
}

export default Offer