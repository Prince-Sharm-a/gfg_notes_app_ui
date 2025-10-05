import { memo, useRef, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesInput } from "../../components/NotesInput";
import { useFormState } from "react-dom";

export const Home=memo(()=>{
    const [form,setform]=useState()
    return (
        <>
        <Navbar />
        <Sidebar />
        <main>
            <NotesInput important={true}/>
        </main>
        </>
    )
})