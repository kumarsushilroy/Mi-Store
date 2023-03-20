
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';




const Slider = ({ start }) => {

    return (
        <div>

           
            <Carousel interval={2000}>


                {
                    start.map((item, i) => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={item}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    })
                }


            </Carousel>



        </div>
    )
}

export default Slider