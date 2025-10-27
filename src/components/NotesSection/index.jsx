import { memo, useState } from "react";
import ArticleIcon from '@mui/icons-material/Article';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined"
import ArchiveRoundedIcon from "@mui/icons-material/ArchiveRounded"
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined"
import PushPinIcon from "@mui/icons-material/PushPin"
import { make_important, make_archive, move_to_trash, get_deleted_Notes } from "../../api/notes";
import { useDispatch } from "react-redux";

export const NotesSection=memo(({data})=>{
    const dispatch = useDispatch();
    // const { isNoteSecActive } = useSelector(state=>state.activeComponent)
    const [isNoteSecActive,setNoteSecActive]=useState(false)
    // console.log(data);

    const handleNoteSecClick =()=>{
        setNoteSecActive(!isNoteSecActive)
        // dispatch(setNoteSecActive());
    }

    // useEffect(()=>{
    //     // dispatch(setNoteSecActive({NoteSecActive:false}))
    //     console.log("note section ",data)
    //     // return ()=>{
    //     //     dispatch(setNoteSecActive({NoteSecActive:false}))
    //     // }
    // },[])
    const handlearchiveClick = (id) =>{
        dispatch(make_archive(id));
    }
    const handleimportantClick = (id)=>{
        dispatch(make_important(id));
    }
    const handleDeleteClick = (id) =>{
        dispatch(move_to_trash(id));
        dispatch(get_deleted_Notes());
    }

    return (
        <>
        <div onClick={handleNoteSecClick} className={`notes-section-header ${isNoteSecActive ? 'move' : ''}`}>
            <h1><ArticleIcon/>Notes</h1>
        </div>
        <div className={`notes-section ${isNoteSecActive? '' : 'hide'}`}>
            {
                data.length > 0 && data.map(note=>(
                <div className="notes-card" key={note?.id}>
                    <h4 className="notes-card-title font-serif">{note.title}</h4>
                    <button className="absolute top-1 right-2" onClick={()=>handleimportantClick(note?.id)}>
                        {
                            note.important ? <PushPinIcon/> : <PushPinOutlinedIcon/>
                        }
                    </button>
                    <button className="absolute top-1 right-8" onClick={()=>handlearchiveClick(note?.id)}>
                        {
                            note.archive ? <ArchiveRoundedIcon/> : <ArchiveOutlinedIcon/>
                        }
                    </button>
                    <span className="notes-card-note font-serif">{note.note}</span>
                    <button className="absolute right-2 bottom-1" onClick={()=>handleDeleteClick(note?.id)}><DeleteOutlineIcon/></button>
                </div>
                ))
            }
        </div>
        </>
    )
})