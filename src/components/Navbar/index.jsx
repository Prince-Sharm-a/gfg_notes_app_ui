import { memo, useState } from "react";
import logo from "./Refined Logo with Transparent Background.png"
import { Sidebar } from "../Sidebar";

export const Navbar=memo(()=>{
    
    
    return (
        <>
        <header className="flex items-center gap-3 border-b-4 px-5 size-24 navbar">
            <div className="size-24">
                <img src={logo} className="w-full h-full" alt="App Logo"/>
            </div>
            <div className="absolute left-1/2">
                <h1 className="font-bold italic font-serif text-shadow-lg antialiased text-black-600 text-4xl">My Notes...</h1>
            </div>
        </header>
        </>
    )
})