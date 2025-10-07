import { memo, useRef, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesInput } from "../../components/NotesInput";
import { useFormState } from "react-dom";
import { NotesSection } from "../../components/NotesSection";

export const Important=memo(()=>{
    
    return (
        <>
        <Navbar />
        <Sidebar />
        <main>
            <NotesInput important={true}/>
            <NotesSection />
        </main>
        </>
    )
})