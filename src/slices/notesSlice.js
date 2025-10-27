import { createSlice } from "@reduxjs/toolkit";

const initialState={
    notes:[],
    deletedNotes:[]
    // important:[],
    // archive:[],
}

const notesSlice = createSlice({
    name:"note",
    initialState,
    reducers:{
        setnotes:(state,action)=>{
            state.notes=action.payload;
            // state.important=action.payload.filter(n => n?.important);
            // state.archive=action.payload.filter(n => n?.archive);
        },
        makeNoteImportant:(state,action)=>{
            state.notes=state.notes.map(n=>n.id===action.payload?.id ? {...n,important:!n.important,archive:false} : n);
        },
        makeNoteArchive:(state,action)=>{
            state.notes=state.notes.map(n=>n.id===action.payload?.id ? {...n,archive:!n.archive,important:false} : n);
        },
        moveNotetoTrash:(state,action)=>{
            // state.notes=state.notes.map(n=>n.id===action.payload?.id ? {...n,isdeleted:true} : n)
            state.notes=state.notes.filter(n => n.id!==action.payload?.id);
        },
        setDeletedNotes:(state,action)=>{
            state.deletedNotes=action.payload;
        }
    }
})

export const { setnotes, makeNoteArchive, makeNoteImportant, moveNotetoTrash, setDeletedNotes } = notesSlice.actions
export default notesSlice.reducer