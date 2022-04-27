import React, { useState } from 'react'
import "./Carousel2.css";
import { imagenes2 } from "./CarouselData2";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";


function Carousel2() {

    const [currImg2, setCurrImg2] = useState(3);
    return (
        <div className='carousel2'>
            <div className='carouselInner2'
                style={{ backgroundImage: `url(${imagenes2[currImg2].img})` }}>

                <div className="left2"
                    onClick={() => {
                      currImg2>0 && setCurrImg2(currImg2 - 1);

                    }}>

                    <BiChevronLeft size={'4em'} />
                </div>
                <div className="center2">
                    <h1 className='tite2'>{imagenes2[currImg2].titlee}</h1>
                    <p className='subtite2'>{imagenes2[currImg2].subtitle}</p>
                </div>
                <div className="right2"
                    onClick={() => {
                      currImg2<imagenes2.length-1 &&  setCurrImg2(currImg2 + 1);

                    }}>
                    <BiChevronRight size={'4em'} />
                </div>

            </div>
        </div>
    )
}

export default Carousel2