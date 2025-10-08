import { configureStore } from "@reduxjs/toolkit";
import activeComponentReducer from "../slices/componentSlice"
import noteReducer from "../slices/notesSlice"

export const store = configureStore({
    reducer:{
        activeComponent:activeComponentReducer,
        note:noteReducer
    }
})