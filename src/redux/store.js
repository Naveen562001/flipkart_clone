import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./reducer/handleCart";


const store = configureStore({
    reducer:{
        cart: cartReducer,
    },
    });

export default store;