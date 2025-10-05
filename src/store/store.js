import { configureStore } from "@reduxjs/toolkit";
import activeComponentReducer from "../slices/componentSlice"

export const store = configureStore({
    reducer:{
        activeComponent:activeComponentReducer
    }
})