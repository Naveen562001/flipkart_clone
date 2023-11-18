import React from 'react'
import "./style.scss";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';




const Slides = () => {
  
 

  return (
    <div className="slide-container">
      <div style={{ display: 'block', width: 1550, height:100,padding: 30 }}>
      
      <Carousel>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/d5e050dc3ec05bf3.jpg?q=50"
            alt="Imag-One"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1621488513434/today-electronics-offers.jpg"
            alt="Imag-Two"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-vector/minimalist-furniture-sale-banner-social-media-post-template_553141-72.jpg?w=1380"
            alt="Imag-Two"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="https://cdn3.desidime.com/topics/photos/1448729/original/WELCOMEFLIGHT_Web_Carousel_%281%29.jpg?1656443457"
            alt="Imag-Two"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
 
    
  </div>
  
  )
}

export default Slides