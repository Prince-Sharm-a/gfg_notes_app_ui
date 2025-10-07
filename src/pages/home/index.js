import { memo, useRef, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesInput } from "../../components/NotesInput";
import ArticleIcon from '@mui/icons-material/Article';
import { NotesSection } from "../../components/NotesSection";

export const Home=memo(()=>{
    return (
        <>
        <Navbar />
        <Sidebar />
        <main>
            <NotesInput/>
            <NotesSection/>
        </main>
        </>
    )
})