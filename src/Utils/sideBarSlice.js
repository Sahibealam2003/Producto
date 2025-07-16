import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isSideBarOn:false
} 
const sideBarSlice = createSlice({
    name:'sidebar',
    initialState,
    reducers:{
        setSideBarOn:(state)=>{
            state.isSideBarOn=true
        },
        setSideBarOff:(state)=>{
            state.isSideBarOn =false
        }
    }
})

export const{setSideBarOff,setSideBarOn} = sideBarSlice.actions
export default sideBarSlice.reducer