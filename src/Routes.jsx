import React from 'react';
import {Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './component/Home';
import AllProducts from './component/AllProducts';
import Product from './component/Product';
import Search from './component/Search';
import Cart from './component/cart';
import Login from './component/login';
import Register from './component/register';

const Routing = () => {

  
  return (
    <>
    
    <BrowserRouter>
    <Routes>
                <Route exact path ='/' element = {<Home/>}/>
                <Route exact path ='/login' element = {<Login/>}/>
                <Route exact path ='/register' element = {<Register/>}/>
                <Route  exact path ="/All" element = {<AllProducts/>}></Route>
                <Route exact path ='/products/:id' element = {<Product/>}/>
                <Route  exact path ="/cart" element = {<Cart/>}></Route>
                
            </Routes>
    </BrowserRouter>
        
        
        </>

    
  )
}

export default Routing;