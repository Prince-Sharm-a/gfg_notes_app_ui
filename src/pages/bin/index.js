import { memo, useEffect, useRef, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesInput } from "../../components/NotesInput";
import { useDispatch, useSelector } from "react-redux";
import { get_deleted_Notes } from "../../api/notes";
import ArticleIcon from "@mui/icons-material/Article"

export const Bin=memo(()=>{
    const dispatch = useDispatch();
    const [isNoteSecActive,setNoteSecActive]=useState(false)
    // console.log(data);
    
    const handleNoteSecClick =()=>{
        setNoteSecActive(!isNoteSecActive)
        // dispatch(setNoteSecActive());
    }
    useEffect(()=>{
        dispatch(get_deleted_Notes());
    },[])
    const { deletedNotes } = useSelector(state => state.note)
    // console.log("bin:",deletedNotes);
    return (
        <>
        <Navbar />
        <Sidebar />
        <main className="justify-start">
            <div className="flex gap-4 ml-4">
            {
                deletedNotes.length > 0 && deletedNotes.map(note=>(
                <div className="notes-card" key={note?.id}>
                    <h4 className="notes-card-title font-serif">{note.title}</h4>
                    {/* <button className="absolute top-1 right-2" onClick={()=>handleimportantClick(note?.id)}>
                        {
                            note.important ? <PushPinIcon/> : <PushPinOutlinedIcon/>
                        }
                    </button> */}
                    {/* <button className="absolute top-1 right-8" onClick={()=>handlearchiveClick(note?.id)}>
                        {
                            note.archive ? <ArchiveRoundedIcon/> : <ArchiveOutlinedIcon/>
                        }
                    </button> */}
                    <span className="notes-card-note font-serif">{note.note}</span>
                    {/* <button className="absolute right-2 bottom-1" onClick={()=>handleDeleteClick(note?.id)}><DeleteOutlineIcon/></button> */}
                </div>
                ))
            }
        </div>
        </main>
        </>
    )
})