import axios from "axios"
import { setnotes } from "../slices/notesSlice"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNotes=()=> async dispatch =>{
    try{
        const data= await axios.get("/get_notes");
        dispatch(setnotes(data.data));
        console.log("calling getNotes data.data",data.data)
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

export const deleteNotes=async (note_id)=> async dispatch=>{
    try{
        await axios.delete("/delete_note",{
            note_id:note_id,
        })
    } catch(err){
        return err.message;
    }
}