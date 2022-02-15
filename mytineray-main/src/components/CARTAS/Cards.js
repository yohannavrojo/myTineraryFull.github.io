import React from 'react'
import Card from "./Card"

function Cards(props) {
   
   const cities=props.cities;
   
    return (
<>

       
                {
                    cities.map((city) => (
                        <div className='col-md-5'key={city.id} style={{margin:"30px"}}>

                            <Card name={city.name}img={process.env.PUBLIC_URL+`/Imagenes/imagenesciti/${city.img}`}  description={city.description}/>

                        </div>
                    ))
                }



</>
            


        
    )
}

export default Cards
