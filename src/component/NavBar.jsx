import React from 'react';
import "./style.scss";
import grocery from '../image/grocery1.png';
import mobile from '../image/mobile.jpg';
import fashion from '../image/fas.jpg';
import electronics from '../image/electronics.png';
import home from '../image/home.png';
import appliances from '../image/appliances.png';
import travel from '../image/flight.png';
import offers from '../image/offer.png';
import toys from '../image/toys.png';
import bike from '../image/bike.png';

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className='items4'>
           <img src ={grocery} alt="grocery"></img>
           <span>Grocery</span>

      </div>
      <div className='items4'>
        <img src={mobile} alt="mobile"></img>
        <span>Mobiles</span>

      </div>
      <div className='items4'>
        <img src={fashion} alt="fashion"></img>
        <span>Fashion</span>

      </div>
      <div className='items4'>
        <img src={electronics} alt="electronics"></img>
        <span>Electronics</span>

      </div>
      <div className='items4'>
        <img src={home} alt="home"></img>
        <span>Home</span>

      </div>
      <div className='items4'>
        <img src={appliances} alt="appliances"></img>
        <span>Appliances</span>

      </div>
      <div className='items4'>
        <img src={travel} alt="travel"></img>
        <span>Travel</span>

      </div>
      <div className='items4'>
        <img src={offers} alt="offer"></img>
        <span>Top Offers</span>

      </div>
      <div className='items4'>
        <img src={toys} alt="toys"></img>
        <span>Beauty, Toys & More</span>

      </div>
      <div className='items4'>
        <img src={bike} alt="bike"></img>
        <span>Two Wheelers</span>

      </div>


        
        </div>
  )
}

export default NavBar