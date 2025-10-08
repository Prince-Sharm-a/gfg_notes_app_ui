import { createSlice } from "@reduxjs/toolkit";

const initialState={
    notes:[],
    important:[],
    archive:[],
}

const notesSlice = createSlice({
    name:"note",
    initialState,
    reducers:{
        setnotes:(state,action)=>{
            state.notes=action.payload;
            state.important=action.payload.filter(n => n?.important);
            state.archive=action.payload.filter(n => n?.archive);
        },
    }
})

export const { setnotes } = notesSlice.actions
export default notesSlice.reducer