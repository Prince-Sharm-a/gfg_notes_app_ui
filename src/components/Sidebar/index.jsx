import { NavLink } from "react-router-dom"
import menu_logo from "./menu_icon_revert_side.png"
import home_icon from "./home_icon.png"
import dustbin_icon from "./dustbin_icon.png"
import archive_icon from "./archive_icon.png"
import important_icon from "./icon_for_important_collection.png"
import { memo, useState } from "react"

export const Sidebar = memo(()=>{
    const [isMenuClicked,setMenuClicked]=useState(false)
    const [isMenuActive,setMenuActive]=useState(false)
    
    const onmenuClick=()=>{
        setMenuClicked(!isMenuClicked)
        setMenuActive(!isMenuActive)
    }
    const sidebarstyle=({isActive})=>{
        // console.log(isActive)
        return (
            `side-bar-item ${isActive ? 'side-bar-active' : 'side-bar-inactive' }`
        )
    }
    return (
        <aside className="bg-none side-bar">
            <div className="size-24 flex items-center side-bar-icon">
                <img onClick={onmenuClick} className={`size-14 items-center menu-logo ${isMenuActive ? isMenuClicked ? 'spin move' : '' : ''} cursor-pointer`} src={menu_logo} />
            </div>
            <div className={` side-bar-items-container ${isMenuActive ? '' : 'hide'}`}>
                <NavLink to={"/home"} className={sidebarstyle}>
                    <div>
                        <img className="size-6 mr-1" src={home_icon} />
                    </div>
                    <div>Home</div>
                </NavLink>
                <NavLink to={"/archive"} className={sidebarstyle}>
                    <div>
                        <img className="size-8 mr-1" src={archive_icon} />
                    </div>
                    <div>Archive</div>
                </NavLink>
                <NavLink to={"/important"} className={sidebarstyle}>
                    <div>
                        <img className="size-6 mr-1" src={important_icon} />
                    </div>
                    <div>Important</div>
                </NavLink>
                <NavLink to={"/bin"} className={sidebarstyle}>
                    <div>
                        <img className="size-8 mr-1" src={dustbin_icon} />
                    </div>
                    <div>Bin</div>
                </NavLink>
            </div>
        </aside>
    )
})