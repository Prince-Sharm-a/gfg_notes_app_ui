import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isMenuActive:false,
    isMenuClicked:false,
    // isNoteSecActive:false,
    DarkMode:false
}

const componentSlice=createSlice({
    name:"activeComponent",
    initialState,
    reducers:{
        setMenuActive:(state,action)=>{
            state.isMenuActive= !state.isMenuActive;
        },
        setMenuClicked:(state,action)=>{
            state.isMenuClicked= !state.isMenuClicked;
        },
        // setNoteSecActive:(state,action)=>{
        //     state.isNoteSecActive= action.payload ? action.payload?.NoteSecActive : !state.isNoteSecActive;
        // },
        setDarkMode:(state,action)=>{
            state.DarkMode = !state.DarkMode
        }
    }
})

export const { setMenuActive, setMenuClicked, setDarkMode } = componentSlice.actions;
export default componentSlice.reducer;