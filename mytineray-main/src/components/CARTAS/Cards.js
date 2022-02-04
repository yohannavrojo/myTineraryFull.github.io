import React from 'react'
import Card from "./Card"

import imagen1 from "../imagenes/Hawaii.jpg"
import imagen2 from "../imagenes/paris-.jpg"
import imagen3 from "../imagenes/dubai.jpg"
import imagen4 from "../imagenes/holanda.jpg"
import imagen5 from "../imagenes/eslovaquia.jpg"
import imagen6 from "../imagenes/granada.jpg"




const cards = [
    {
        id: 1,
        title: "HAWAII",
        image: imagen1,
        url:"https://www.viajarhawaii.com/informacion-hawaii.php",
        text:"The Hawaiian Islands form an archipelago that extends over a vast area of the North Pacific Ocean.. "
    },
    {
        id: 2,
        title: "PARIS",
        image: imagen2,
        url:"https://www.civitatis.com/ar/paris/",
        text:"Paris is indisputably one of the most beautiful cities in the world, the capital of France, art and fashion."
    },
    {
        id: 3,
        title: "DUBAI",
        image: imagen3,
        url:"",
        text:"Dubai has become famous for the construction of huge skyscrapers such as the 828-meter-high Burj Khalifa (the tallest on the planet) and pharaonic tourism projects."
    },
    {
        id: 4,
        title: "HOLLAND",
        image: imagen4,
        url:"",
        text:"The flower fields of these beautiful plants are typically Dutch. However, the tulips do not come from the Netherlands."
    },
    {
        id: 5,
        title: "SLOVAKIA",
        image: imagen5,
        url:"",
        text:"Slovakia has many winter sports centers, historical cities, picturesque castles, caves, unique wooden churches."
    },
    {
        id: 6,
        title: "GRENADE",
        image: imagen6,
        url:"",
        text:"There are multiple possibilities at any time of the year: cultural and monumental, rural and active tourism, snow and sports, sun and beach.."
    },
   

]

function Cards() {
    return (


        <div className='container  justify-content-center align--items-center h-100 '>
            <div className='row'>
                {
                    cards.map((card) => (
                        <div className='col-md-5'key={card.id} style={{margin:"30px"}}>

                            <Card title={card.title}imageSource={card.image} url={card.url} text={card.text}/>

                        </div>
                    ))
                }




            </div>


        </div>
    )
}

export default Cards
