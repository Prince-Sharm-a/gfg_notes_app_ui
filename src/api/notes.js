import axios from "axios"
import { setnotes } from "../slices/notesSlice"

export const getNotes=()=> async dispatch =>{
    try{
        const data= await axios.get("/get_notes");
        dispatch(setnotes(data.data));
        console.log(data.data)
    }
    catch(err){
        return err.message;
    }
}

export const addNotes=(note)=>async dispatch=>{
    try{
        await axios.post("/add_note",note);
    } catch(err){
        return err.message;
    }
}

export const updNotes=(note)=> async dispatch=>{
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