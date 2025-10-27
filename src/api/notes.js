import axios from "axios"
import { setnotes, makeNoteArchive, makeNoteImportant, moveNotetoTrash, setDeletedNotes } from "../slices/notesSlice"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNotes=()=> async dispatch =>{
    try{
        const data= await axios.get("/get_notes");
        dispatch(setnotes(data.data));
        // console.log("calling getNotes data.data",data.data)
    }
    catch(err){
        return err.message;
    }
}

export const addNotes=createAsyncThunk("note/addNotes",async (note)=>{
    try{
        const res = await axios.post("/add_note",note);
        return res.data;
    } catch(err){
        return err.message;
    }
})

export const updNotes=async (note)=> async dispatch=>{
    try{
        await axios.put("/edit_notes",{
            edit:note,
        });
    } catch(err){
        return err.message;
    }
}

export const deleteNotes=(note_id)=> async dispatch=>{
    try{
        await axios.delete("/delete_note",{
            note_id:note_id,
        })
    } catch(err){
        return err.message;
    }
}

export const move_to_trash = (note_id)=>async dispatch=>{
    try{
        await axios.delete(`/move_to_bin?note_id=${note_id}`);
        dispatch(moveNotetoTrash({id:note_id}))
    }
    catch(err){
        return err.message
    }
}

export const make_important=(note_id)=> async dispatch=>{
    try{
        const data = await axios.put(`/make_important_note?note_id=${note_id}`);
        dispatch(makeNoteImportant({id:note_id}));

    }catch(err){
        return err.message
    }
}

export const make_archive=(note_id)=> async dispatch=>{
    try{
        const data = await axios.put(`/make_archive_note?note_id=${note_id}`);
        dispatch(makeNoteArchive({id:note_id}));

    }catch(err){
        return err.message
    }
}

export const get_deleted_Notes=()=>async dispatch=>{
    try{
        const { data } = await axios.get('/get_trashed_notes');
        dispatch(setDeletedNotes(data));
        console.log(data);
    }catch(err){
        return err.message
    }
}