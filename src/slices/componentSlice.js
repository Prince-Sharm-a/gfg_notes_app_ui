import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isMenuActive:false,
    isMenuClicked:false
}

const componentSlice=createSlice({
    name:"activeComponent",
    initialState,
    reducers:{
        setMenuActive:(state,action)=>{
            state.isMenuActive= !state.isMenuActive
        },
        setMenuClicked:(state,action)=>{
            state.isMenuClicked= !state.isMenuClicked
        }
    }
})

export const { setMenuActive, setMenuClicked } = componentSlice.actions;
export default componentSlice.reducer;