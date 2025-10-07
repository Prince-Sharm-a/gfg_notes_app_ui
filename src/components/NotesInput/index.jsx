import axios from "axios"
import { memo, useCallback, useEffect, useState } from "react"
import AddIcon from '@mui/icons-material/Add';

export const NotesInput=memo((props)=>{
    const initialState={
        title:'',
        note:'',
        important:false,
        archive:false
    }
    const [note,setNote]=useState(initialState)
    useEffect(()=>{
        setNote({...initialState,important:props.important || false,archive:props.archive || false})
        // console.log("useEffect",note)
    },[])
    const ontitleChange=(e)=>{
        setNote({...note,title:e.target.value})
    }
    const onnoteChange=(e)=>{
        setNote({...note,note:e.target.value})
    }

    const handleAddButton=useCallback(async ()=>{
        try{
            // await axios.post('/add_note',{
            //     new_note:note
            // })
            console.log(note)
            setNote({...initialState,important:props.important || false,archive:props.archive || false})
        }
        catch(e){
            return e.message
        }
    },[note])

    return(
        <>
        <div className="note-input-jsx">
            <textarea className="title" onChange={ontitleChange} value={note.title} name="title" placeholder="Enter title....." /><br/>
            <textarea className="note" onChange={onnoteChange} value={note.note} name="note" placeholder="Write notes....." />
            <button id="note-add-button" onClick={handleAddButton}><AddIcon></AddIcon></button>
        </div>
        </>
    )
})