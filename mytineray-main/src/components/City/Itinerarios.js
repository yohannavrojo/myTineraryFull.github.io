import React from "react";
import "../City/Itinerarios.css";
import Comments from "../City/Comments";
import Like from "../City/Like";

function Itinerarios(props) {
  const itinerarios = props.itineSelecter;

  console.log(props);
  console.log(itinerarios)
  return (
    <>
      <div>
        <div className="container-card">
          {itinerarios.map((itine) => (
            <div key={itine._id} className="card">
              <figure>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/Imagenes/imagenesitinerary/${itine.img}`
                  }
                />
              </figure>
              <div className="contenido-card">
                <h3>{itine.name}</h3>
                <p>{itine.description}</p>
                <h2>
                  {itine.price} {itine.time}
                </h2>
              <Like  likes={itine.likes} id={itine._id}/> 
              
              </div>
   
             <Comments itinerario={itine._id}/>
             
            </div>
            
          ))}
       
        </div>
       
      </div>
    </>
  );
}

export default Itinerarios;
