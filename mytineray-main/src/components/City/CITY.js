import React,{useEffect} from "react";
import covervideo from "../imagenes/video.mp4";
import moneda from "../imagenes/current.png";
import languaje from "../imagenes/languaje.png.png";
import avion from "../imagenes/avion.png";
import "../City/City2.css";
import Itinerarios from "./Itinerarios";
import Titulo from"../City/titulo";
import { useParams } from "react-router-dom";
import {useStateValue} from "../../StateProvider"
import {actionType} from "../../reducer" 
import axios from "axios";

function CITY() {
 const [{cities,itineraries},dispath] =useStateValue() 
 const {id}=useParams()
 const citySelecter= cities.filter(city=>city._id === id) 
 console.log(citySelecter)
 const itineSelecter=itineraries.filter(itine=>itine.city=== citySelecter[0].name)  
console.log(itineSelecter)

console.log(itineraries)

useEffect(() => {
  console.log(citySelecter)
  citySelecter.map(city=>
     
          axios.get(`http://localhost:4000/api/itinerary/${city.name}`)
          .then(response => dispath({  
            type:actionType.ITINERARIESDB ,
            itineraries:response.data.response.itinerary
            })
      ))},[])





  return (
    <>
    {citySelecter.map(data=>
        <div key={data._id} className="pagina" >
      <div className="cover-container">
        <video className="video" src={covervideo} autoPlay loop muted></video>
        <div className="nombreciudad">
          <h1>{data.name}</h1>
        </div>
      </div>
      
{/*  itinerario */}

     
<div className="bodys">
          <div className="cartas">
            <div className="contenedor">
              <div className="usuario1" >
              <img className="c1"  src={avion} ></img>
              </div>
              <header className="encabezado" >{data.country}</header>
            </div>
          </div>
         
         
          <div className="cartas">
            <div className="contenedor">
              <div className="usuario2">
                <img className="c2"  src={languaje} ></img>
              </div>
              <header className="encabezado" >{data.language}</header>
            </div>
          </div>



          <div className="cartas">
            <div className="contenedor">
              <div className="usuario3">
              <img className="c3"  src={moneda} ></img>
              </div>
              <header className="encabezado" >{data.currency}</header>
            </div>
          </div>
          
               
          </div> 
         
         

 <Titulo/>
     
  <Itinerarios itineSelecter={itineSelecter} />
            
   </div>
        

           
         
   
     )}
    </>
  );
}

export default CITY;
