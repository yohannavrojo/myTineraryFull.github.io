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

      <div className="cardshome">
        <div className="cardh card1">
          <div className="container">
            <img src={require("../imagenes/vegas.jpg")} alt="vegas" />
          </div>
          <div className="details">
            <h3>Las Vegas</h3>
            <p>
              Anyone who has been to Las Vegas knows that this town in southern
              Nevada, in the southwestern United States, rises up in the middle
              of nowhere in the arid Mojave Desert like a mirage... or an oasis.
            </p>

            <div className="boton">
              <Link to={"/Cities"}>
                <span>Read More</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="cardh card2">
          <div className="container">
            <img src={require("../imagenes/Nueva-York.gif")} alt="york" />
          </div>
          <div className="details">
            <h3>New York</h3>
            <p>
              It is the most populous city in the State of New York, in the
              United States of America, and the second largest urban
              agglomeration on the continent. It is the center of the New York
              metropolitan area, which is among the five largest urban
              agglomerations in the world.
            </p>

            <div className="boton">
              <Link to={"/Cities"}>
                <span>Read More</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="cardh card3">
          <div className="container">
            <img src={require("../imagenes/singapur .jpg")} alt="singapur" />
          </div>
          <div className="details">
            <h3>Singapore</h3>
            <p>
              Singapore is a city-state located at the southern tip of the Malay
              Peninsula. In just 700 square kilometers it has a population of
              more than four and a half million inhabitants. Singapore is
              characterized by plurality.
            </p>

            <div className="boton">
              <Link to={"/Cities"}>
                <span>Read More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
