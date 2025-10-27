import { memo } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesInput } from "../../components/NotesInput";
import { NotesSection } from "../../components/NotesSection";
import { useSelector } from "react-redux";

export const Home=memo(()=>{
    const { notes } = useSelector(state => state.note)
    // console.log("notes",notes)
    return (
        <>
        <Navbar />
        <Sidebar />
        <main>
            <NotesInput/>
            <NotesSection data={notes.filter(n=> !n.isdeleted)}/>
        </main>
        </>
    )
})