import { memo, useRef, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesInput } from "../../components/NotesInput";
import ArticleIcon from '@mui/icons-material/Article';
import { NotesSection } from "../../components/NotesSection";
import { useSelector } from "react-redux";
import { data } from "react-router-dom";

export const Home=memo(()=>{
    const { notes } = useSelector(state => state.note)
    // console.log("notes",notes)
    return (
        <>
        <Navbar />
        <Sidebar />
        <main>
            <NotesInput/>
            <NotesSection data={notes}/>
        </main>
        </>
    )
})