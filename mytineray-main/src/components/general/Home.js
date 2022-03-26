import React from "react";
import "../general/Home.css";
import { Link } from "react-router-dom";

// import Carousel from "../general/carouselHome";
const Home = () => {
  return (
    <>
      {/* cartas viejas  */}

      <div className="home">
        <div className="homeTitle">
          <p className="Title">MY ITINERARY </p>
        </div>
        <div className="Img">
          <img
            src={require("../imagenes/home2.jpg")}
            width="100%"
            height="400"
          />
        </div>
      </div>

      <div className="toque">
        <div className="linea">
          <h1 className="eslogan">Pure Travel, Pure Power</h1>
          <h2 className="subtitle">
            The world is too beautiful to travel only online
          </h2>
        </div>
      </div>

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

      {/* cartas nuevas  */}
      <div className="informacion ">
        <p className="texto-info1">
          {" "}
          <a>
            La felicidad humana generalmente no se logra con grandes golpes de
            suerte, <br />
            que pueden ocurrir pocas veces, sino con pequeñas cosas que ocurren
            todos los días.
            <br />
            <strong> Benjamin Franklin (1706-1790) </strong>
          </a>
        </p>
      </div>

     
     {/* <Carousel>hola </Carousel> */}
 
     {/* <div class="container-face">
  <div class="carousel-face">
    <div class="carousel__face"></div>
    <div class="carousel__face"><span className="palabra">Promotions for</span></div>
    <div class="carousel__face"></div>
    <div class="carousel__face"></div>
    <div class="carousel__face"><span className="palabra">all seasons</span></div>
    <div class="carousel__face"></div>
    <div class="carousel__face"></div>
    <div class="carousel__face"><span className="palabra">We are waiting for you</span></div>
    <div class="carousel__face"></div>
  </div>
</div>  */}
     

      <div className="espacio">
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
    </>
  );
};

export default Home;
