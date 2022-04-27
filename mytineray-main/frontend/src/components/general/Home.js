import React from "react";
import "../general/Home.css";
import { Link } from "react-router-dom";
import Carousel2 from "./Carousel2";

const Home = () => {
  return (
    <>
      {/* cartas viejas  */}

      <div className="home">
        <div className="homeTitle">
          <p className="Title">My Itinerary </p>
        </div>
        <div className="Img">
          <img
            className="Imgtitulo"
            src={require("../imagenes/aviajes2.png")}
          />
        </div>
      </div>

      <div className="toque">
        <h1 className="eslogan">Pure Travel, Pure Power</h1>
        <h2 className="subtitle">
          The world is too beautiful to travel only online
        </h2>
      </div>

      {/* cartas nuevas  */}
   
      {/* inicio */}

      <div className="cardshome">
       
        <div class="container1">
          <div class="front1 side1">
              <h3>Las Vegas</h3>
          </div>
          <div class="back1 side1">
            <div class="content1">
            
              <p>
                Anyone who has been to Las Vegas knows that this town in
                southern Nevada, in the southwestern United States.
              </p>
            </div>
          </div>
        </div>

        <div class="container2">
          <div class="front2 side2">
             <h3>New York</h3>
          </div>
          <div class="back2 side2">
            <div class="content1">
             
              <p>
                It is the most populous city in the State of New York, in the
                United States of America.
              </p>
            </div>
          </div>
        </div>

        <div class="container3">
          <div class="front3 side3">
             <h3>Singapore</h3>
          </div>
          <div class="back3 side3">
            <div class="content1">
             
              <p>
                Singapore is a city-state located at the southern tip of the
                Malay Peninsula.
              </p>
            </div>
          </div>
        </div>
 
      </div>

    <div className="fondo-boton">

      <Link to={"/Cities"}>

      <p className="links">READ MORE</p>
      </Link>
    </div>
  
      

      {/* fin */}

      <div className="informacion ">
        <p className="texto-info1">
          {" "}
          <a>“Don't hold grudges, better save money to travel”</a>
        </p>
        <div className="Img2"></div>
      </div>

      <div className="espacio">
        <div className="titulo-promo">
          <h2 className="titulo-promo2">POPULAR CITIES</h2>
        </div>
      </div>
      <Carousel2 />
    </>
  );
};

export default Home;
