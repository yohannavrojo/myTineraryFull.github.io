import React from "react";
import Carousel from "../Carousel/Carousel";
import "../Carousel/Carousel.css";
import Cards from "../CARTAS/Cards";
import "../../App.css";

import "../general/Cities.css";

import Search from "../search/Search"


function Cities() {
  return (
    <>
     
      <Carousel />
      
      <h1 className="text-cities-p"> 
      Only few will understand <br/>
      traveling is our happiness
      </h1>
      <Search/>
      <div className="text">
        
      </div>

      <div className="App1">
        <div className="hero">
          <h1 className="titulo"> CITIES </h1>
        </div>

        <Cards />
      </div>

     
    </>
  );
}
export default Cities;
