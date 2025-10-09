import axios from "axios"
import { memo, useCallback, useEffect, useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from "react-redux";
import { addNotes, getNotes } from "../../api/notes";

export const NotesInput=memo((props)=>{
    const initialState={
        title:'',
        note:'',
        important:false,
        archive:false
    }
    const [note,setNote]=useState(initialState)
    const dispatch = useDispatch()
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
            // console.log(note)
            if(note.title.length > 0 ){
                await dispatch(addNotes(note))
            }
            setNote({...note,title:'',note:''});
            dispatch(getNotes());
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