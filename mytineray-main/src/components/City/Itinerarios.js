import React from "react";
import "../City/Itinerarios.css";

import foto1 from "../imagenes/argelia2.jpg";

function Itinerarios(props) {
  const itinerarios = props.itineSelecter;
 
  console.log(props);
  return (
    <>
      
        <div>
          
          <div class="container-card">
            {itinerarios.map((itine) => (
            <div  class="card">
              <figure>
                <img src={process.env.PUBLIC_URL+`/Imagenes/imagenesitinerary/${itine.img}`} />
              </figure>
              <div class="contenido-card">
                <h3 >{itine.name}</h3>
                <p >
                 {itine.description}
                 
                </p>
                <h2>
                  {itine.price} {itine.time}
                </h2>
                <a href="#">Leer Màs</a>
              </div>
            </div>
          ))}
          </div>
        </div>
      
    </>
  );
}

export default Itinerarios;
