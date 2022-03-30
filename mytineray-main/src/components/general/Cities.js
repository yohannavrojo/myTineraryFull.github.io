import React from "react";
import Carousel from "../Carousel/Carousel";
import "../Carousel/Carousel.css";
import Card from "../CARTAS/Card";
import "../../App.css";
import "../general/Cities.css";
import Search from "../search/Search";


function Cities() {


  return (
    <>
      
     <div className="hero">
          <h1 className="titulo"> CITIES <br/>
        </h1>
        </div>


 <Carousel />

      <Search />
      <div className="text"></div>

      <div className="App1">
        

        <div className="container  justify-content-center align--items-center h-100 ">
          <div className="row">
            <Card/>
          </div>
        </div>
      </div>
      
    
    </>
  );
}
export default Cities;
