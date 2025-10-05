import { memo, useRef, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesInput } from "../../components/NotesInput";
import { useFormState } from "react-dom";

export const Archive=memo(()=>{
    return (
        <>
        <Navbar />
        <Sidebar />
        <main>
            <NotesInput archive={true}/>
        </main>
        </>
    )
})