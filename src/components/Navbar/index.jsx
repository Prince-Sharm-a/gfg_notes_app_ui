import { memo, useCallback, useEffect, useMemo, useState } from "react";
import logo from "./Refined Logo with Transparent Background.png"
import { Sidebar } from "../Sidebar";
import blackBackgroundImage from "../../freepik__upload__32031.png"
import whiteBackgroundImage from "../../freepik__talk__53350.png"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useDispatch, useSelector} from 'react-redux';
import { setDarkMode } from "../../slices/componentSlice";

export const Navbar=memo(()=>{
    const dispatch = useDispatch();
    const { DarkMode } = useSelector(state => state.activeComponent);
    const swithDarkMode=useCallback(async ()=>{
        
        dispatch(setDarkMode(!DarkMode))
    },[DarkMode])
    useEffect(()=>{
        document.body.style.backgroundColor = DarkMode ? "#121212"  : "#fafafa"
        if(DarkMode){
            document.getElementsByTagName('main')[0].classList.remove('main-lightmode')
            document.getElementsByTagName('main')[0].classList.add('main-darkmode')
        }
        else{
            document.getElementsByTagName('main')[0].classList.add('main-lightmode')
            document.getElementsByTagName('main')[0].classList.remove('main-darkmode')
        }
    },[DarkMode])
    
    
    return (
        <>
        <header className="flex items-center gap-3 border-b-4 px-5 size-24 navbar">
            <div className="size-24 navbar-icon">
                <img src={logo} className="w-full h-full" alt="App Logo"/>
            </div>
            <div className="">
                <h1 className="font-bold italic font-serif text-shadow-lg antialiased text-black-600 text-4xl">My Notes...</h1>
            </div>
            <div 
            className="flex rounded-[30px] absolute right-[200px] cursor-pointer size-[50px] place-content-center flex-wrap" 
            style={{border:"1px solid #adff2f",borderStyle:"inset"}}
            onClick={swithDarkMode}
            >
                {
                    DarkMode ? 
                    <DarkModeOutlinedIcon  style={{fontSize:"28px"}}/> :
                    <LightModeOutlinedIcon style={{fontSize:"28px"}}/>
                }
            </div>
        </header>
        </>
    )
})