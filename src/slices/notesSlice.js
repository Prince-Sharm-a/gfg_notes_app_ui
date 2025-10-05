import { createSlice } from "@reduxjs/toolkit";

initialState={
    notes:[]
}

const notesSlice = createSlice({
    name:"note",
    initialState,
    reducers:{
        getnotes:(state,action)=>{

        },
        addnotes:(state,action)=>{

        },
        updnotes:(state,action)=>{

        },
        deletenotes:(state,action)=>{

        }
    }
})