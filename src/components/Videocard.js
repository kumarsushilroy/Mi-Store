import React from 'react';
import '../Style/Videocard.css'

function Videocard({name,img,index}) {
  return (
    <div className='vidocard'>
       <img src={img} alt={`${index} `} />
       <h5>{name}</h5>

    </div>
  )
}

export default Videocard