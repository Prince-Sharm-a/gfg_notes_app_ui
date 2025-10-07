import { memo, useEffect, useState } from "react";
import ArticleIcon from '@mui/icons-material/Article';
import { useDispatch,useSelector } from "react-redux";
import { setNoteSecActive } from "../../slices/componentSlice";

export const NotesSection=memo((data)=>{
    const dispatch = useDispatch();
    const { isNoteSecActive } = useSelector(state=>state.activeComponent)
    // const [isNoteSecActive,setNoteSecActive]=useState(false)


    const handleNoteSecClick =()=>{
        // setNoteSecActive(!isNoteSecActive)
        dispatch(setNoteSecActive())
    }

    useEffect(()=>{
        dispatch(setNoteSecActive({NoteSecActive:false}))
        // return ()=>{
        //     dispatch(setNoteSecActive({NoteSecActive:false}))
        // }
    },[])

    return (
        <>
        <div onClick={handleNoteSecClick} className={`notes-section-header ${isNoteSecActive ? 'move' : ''}`}>
            <h1><ArticleIcon/>Notes</h1>
        </div>
        <div className={`notes-section ${isNoteSecActive? '' : 'hide'}`}>
            {
                data.length > 0 && data.map(note=>(
                <div className="notes-card" key={note?.id}>
                    <h4>{note.title}</h4><br/>
                    <span>{note.note}</span>
                </div>
                ))
            }
        </div>
        </>
    )
})