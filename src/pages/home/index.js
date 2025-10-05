import { memo, useRef, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesInput } from "../../components/NotesInput";
import ArticleIcon from '@mui/icons-material/Article';

export const Home=memo(()=>{
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