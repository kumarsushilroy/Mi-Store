import React from 'react'
import Videocard from './Videocard'
import '../Style/videos.css'

function Videos({Vidos}) {
  return (
    <div className='vidos'>
        {
            Vidos.map((item,index)=>{
                return(
                    <Videocard name={item.name} img={item.image} key={index} index={item.index}/>
                    
                )
            })
        }
    </div>
  )
}

export default Videos