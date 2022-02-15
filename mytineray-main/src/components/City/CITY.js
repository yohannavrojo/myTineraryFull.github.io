import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import covervideo from "../imagenes/video.mp4";
import moneda from "../imagenes/current.png";
import "../City/City2.css";
import Carta1 from "../City/Cartascity";
import Titulo from"../City/titulo";
function CITY() {
 
  return (
    <>
    <div className="pagina">
      <div className="cover-container">
        <video className="video" src={covervideo} autoPlay loop muted></video>
        <div className="nombreciudad">
          <h1> Nombre Ciudad </h1>
        </div>
      </div>
     
{/*  itinerario */}

     
<body className="bodys">
          <div className="cartas">
            <div className="contenedor">
              <div className="usuario1" >
              <img className="c1"  src={moneda} ></img>
              </div>
              <header className="encabezado" >Country</header>
            </div>
          </div>
         
         
          <div className="cartas">
            <div className="contenedor">
              <div className="usuario2">
                <img className="c2"  src={moneda} ></img>
              </div>
              <header className="encabezado" >Language</header>
            </div>
          </div>



          <div className="cartas">
            <div className="contenedor">
              <div className="usuario3">
              <img className="c3"  src={moneda} ></img>
              </div>
              <header className="encabezado" >Currency</header>
            </div>
          </div>
          
               
          </body> 
         
 <div className="cart1">
 <Titulo/>
     
 <Carta1/>
            
   </div>
        

           
         
   </div>
    
    </>
  );
}

export default CITY;
