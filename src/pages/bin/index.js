import { memo, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { get_deleted_Notes } from "../../api/notes";

export const Bin=memo(()=>{
    const dispatch = useDispatch();
    // console.log(data);
    useEffect(()=>{
        dispatch(get_deleted_Notes());
    },[dispatch])
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