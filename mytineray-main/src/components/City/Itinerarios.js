import React from "react";
import "../City/Itinerarios.css";
import Comments from "../City/Comments";

function Itinerarios(props) {
  const itinerarios = props.itineSelecter;

  console.log(props);
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
              </div>
             <Comments/>
            </div>
          ))}
       
        </div>
       
      </div>
    </>
  );
}

export default Itinerarios;
