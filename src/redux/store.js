import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './slice'
import productsReducer from './productSlice'

const store=configureStore({
    reducer:{
        cart:CartReducer,
        products:productsReducer  
    }
})

export default store