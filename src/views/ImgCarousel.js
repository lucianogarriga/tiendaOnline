import React from 'react'

const ImgCarousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item">
        <img src="../assets/carru3.jpg" className="d-block w-100" alt="Iphones"/>
      </div>
      <div className="carousel-item">
        <img src="../assets/samsung1.jpg" className="d-block w-100" alt="Samsung"/>
      </div>
      <div className="carousel-item">
        <img src="../assets/carru5.jpg" className="d-block w-100" alt="Notebooks"/>
      </div>
    </div>
  </div>
  )
}

export default ImgCarousel
