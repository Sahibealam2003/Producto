import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './sideBarSlice'
const store = configureStore({
    reducer:{
        sidebar : sidebarReducer
    }
})

export default store