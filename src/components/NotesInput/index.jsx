import axios from "axios"
import { memo, useCallback, useEffect, useState } from "react"

export const NotesInput=memo((props)=>{
    const initialState={
        title:'',
        note:'',
        important:false,
        archive:false
    }
    const [note,setNote]=useState(initialState)
    useEffect(()=>{
        setNote({...note,important:props?.important,archive:props?.archive})
        console.log(note)
    },[])
    const ontitleChange=useCallback((e)=>{
        setNote({...note,title:e.target.value})
    },[])
    const onnoteChange=useCallback((e)=>{
        setNote({...note,note:e.target.value})
    },[])

    const handleAddButton=useCallback(async ()=>{
        try{
            await axios.post('/add_note',{
                new_note:note
            })
        }
        catch(e){
            return e.message
        }
    },[])

    return(
        <>
        <div>
            <input style={{backgroundColor:"black",color:"black"}} size={"100px"} onChange={ontitleChange} value={note.title} name="title" placeholder="Enter title....." />
            <textarea onChange={onnoteChange} value={note.note} name="note" placeholder="Write notes....." />
            <button id="note-add-button" onClick={handleAddButton}>+</button>
        </div>
        </>
    )
})