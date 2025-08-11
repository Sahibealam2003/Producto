import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './sideBarSlice'
import cartReducer from './cartSlice'
const store = configureStore({
    reducer:{
        sidebar : sidebarReducer,
        cart : cartReducer
    }
})

export default store