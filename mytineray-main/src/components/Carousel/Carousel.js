import React, { useState } from 'react'
import "./Carousel.css";
import { imagenes } from "./CarouselData";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";


function Carousel() {

    const [currImg, setCurrImg] = useState(1);
    return (
        <div className='carousel'>
            <div className='carouselInner'
                style={{ backgroundImage: `url(${imagenes[currImg].img})` }}>

                <div className="left"
                    onClick={() => {
                      currImg>0 && setCurrImg(currImg - 1);

                    }}>

                    <BiChevronLeft size={'4em'} />
                </div>
                <div className="center">
                    <h1 className='tite'>{imagenes[currImg].titlee}   </h1>
                 
                </div>
                <div className="right"
                    onClick={() => {
                      currImg<imagenes.length-1 &&  setCurrImg(currImg + 1);

                    }}>
                    <BiChevronRight size={'4em'} />
                </div>

            </div>
        </div>
    )
}

export default Carousel
