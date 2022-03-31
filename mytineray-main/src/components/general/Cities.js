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
      <Carousel />
     
      <div className="hero">
        <h1 className="titulo">
          {" "}
          Travel is the answer, no matter what <br /> 
          the question is.      
        </h1>
      
      </div>
       <Search />
      <div className="text"></div>

      <div className="App1">
        <div className="container  justify-content-center align--items-center h-100 ">
          <div className="row">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
export default Cities;
