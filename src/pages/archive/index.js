import { memo, useRef, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesInput } from "../../components/NotesInput";
import { useFormState } from "react-dom";
import { NotesSection } from "../../components/NotesSection";
import { useSelector } from "react-redux";

export const Archive=memo(()=>{
    const { notes } = useSelector(state => state.note);
    
    return (
        <>
        <Navbar />
        <Sidebar />
        <main>
            <NotesInput archive={true}/>
            <NotesSection data={notes.filter(n => n.archive && !n.isdeleted)}/>
        </main>
        </>
    )
})