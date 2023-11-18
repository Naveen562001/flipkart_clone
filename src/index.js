import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Search from "./component/Search";
import Slides from './component/slides';
import Products from "./component/products";
import AllProducts from './component/AllProducts';
import Routing from './Routes';

import App from './App';
import { BrowserRouter, Routes } from 'react-router-dom';
import Product from './component/Product';
import { Provider } from 'react-redux';
import store  from './redux/store';
import Demo from './demo';
import Login from './component/login'
import Cart from './component/cart';
import Register from './component/register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <Provider store ={store}>
            <Routing/>
        </Provider>

        
);


