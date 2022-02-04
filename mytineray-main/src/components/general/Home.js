import React from "react";
import styled from "styled-components";
import "../general/Home.css";
import { FcLike } from "react-icons/fc";
import {FaRegComment} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <>
     <body>
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

      
        <div className="cards">
          <div className="card card1">
            <div className="container">
              <img src={require("../imagenes/vegas.jpg")} alt="vegas" />
            </div>
            <div className="details">
              <h3>Las Vegas</h3>
              <p>
              Anyone who has been to Las Vegas knows that this town in southern Nevada, in the southwestern United States, rises up in the middle of nowhere in the arid Mojave Desert like a mirage... or an oasis.
              </p>
             <FcLike size={'3em'}/>   <FaRegComment size={'3em'} />
              <div className="boton">
              <Link to={"/Cities"}>
                  <span>Read More</span>
                
              </Link>
              </div>
            </div>
          </div>
          <div className="card card2">
            <div className="container">
              <img src={require("../imagenes/Nueva-York.gif")} alt="york" />
            </div>
            <div className="details">
              <h3>New York</h3>
              <p>
              It is the most populous city in the State of New York, in the United States of America, and the second largest urban agglomeration on the continent. It is the center of the New York metropolitan area,
                which is among the five largest urban agglomerations in the world.
              </p>
              <FcLike size={'3em'}/>   <FaRegComment size={'3em'} />
              <div className="boton">
              <Link to={"/Cities"}>
                  <span>Read More</span>
                
              </Link>
              </div>
            </div>
          </div>
          <div className="card card3">
            <div className="container">
              <img src={require("../imagenes/singapur .jpg")} alt="singapur" />
            </div>
            <div className="details">
              <h3>Singapore</h3>
              <p>
              Singapore is a city-state located at the southern tip of the Malay Peninsula. In just 700 square kilometers it has a population of more than four and a half million inhabitants.
                Singapore is characterized by plurality.
              </p>
              <FcLike size={'3em'}/>   <FaRegComment size={'3em'} />
              <div className="boton">
                <Link to={"/Cities"}>
                  <span>Read More</span>
                
              </Link>
              </div>
            </div>
          </div>
        </div>
       
      </body>
     

     
    </>
  );
};

export default Home;
