import React from "react";
import roomImage from "../../img/IMG-20190824-WA0035.jpg"
import kitchenImage from "../../img/IMG-20190824-WA0038.jpg"
import outdoorImage from "../../img/IMG-20190824-WA0039.jpg"

function Carousel () {
    return(
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src= {roomImage} class=" d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={kitchenImage} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={outdoorImage} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default  Carousel