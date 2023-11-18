import React from 'react'
import Search from './Search';
import NavBar from './NavBar';
import Slides from "./slides"
import Products from './products';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';



const Home = () => {
 const [product,setProduct] = useState([]);
 const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/', { withCredentials: true })
      .then((response) => setIsLoggedIn(true))
      .catch((error) => console.log(error));
  }, []);

  if (!isLoggedIn) {
    return <NavLink to='/login' />;
  }


 const AllData =(data)=>{
  setProduct(data)
 }
 
 console.log(product);

  return (
    <div className='home'>
      <Search allProduct = {product}/>
      <NavBar/>
      <Slides/>
      <Products handleAllData = {AllData}/>
   
     
    </div>
  )
}

export default Home;