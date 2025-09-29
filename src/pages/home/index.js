import { memo, useRef } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesInput } from "../../components/NotesInput";
import { useFormState } from "react-dom";

export const Home=memo(()=>{
    const [form,setform]=useFormState()
    return (
        <>
        <Navbar />
        <Sidebar />
        <main>
            <NotesInput/>
        </main>
        </>
    )
})