import React from "react";
import img1 from "../imagenes/vegas.jpg";

const carouselHome = () => {
  return (
    <>
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel1">
  
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3000">
      <img src={img1} class="imagen1" />
     <img src={img1} class="imagen2" />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <img src={img1} class="imagen3" />
    <img src={img1} class="imagen4" />
    </div>
    <div class="carousel-item">
      <img src={img1} class="imagen5" />
      <img src={img1} class="imagen6" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  
  </button>
</div>
    </>
  );
};
export default carouselHome;
