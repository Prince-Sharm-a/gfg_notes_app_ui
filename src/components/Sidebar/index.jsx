import { NavLink } from "react-router-dom"
import menu_logo from "./menu_icon_revert_side.png"
import home_icon from "./home_icon.png"
import dustbin_icon from "./dustbin_icon.png"
import archive_icon from "./archive_icon.png"
import important_icon from "./icon_for_important_collection.png"
import { memo, useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMenuActive,setMenuClicked } from "../../slices/componentSlice"
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone'
import ArchiveRoundedIcon from '@mui/icons-material/ArchiveRounded';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import LabelImportantRoundedIcon from '@mui/icons-material/LabelImportantRounded';
import LabelImportantOutlineIcon from '@mui/icons-material/LabelImportantOutline';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import DeleteIcon from '@mui/icons-material/Delete';

export const Sidebar = memo(()=>{
    // const [isMenuClicked,setMenuClicked]=useState(false);
    const dispatch=useDispatch();
    const { isMenuActive , isMenuClicked } = useSelector(state=>state.activeComponent)
    // const [isMenuActive,setMenuActive]=useState(false)
    
    const onmenuClick=useCallback(()=>{
        dispatch(setMenuClicked())
        dispatch(setMenuActive())
        // setMenuActive(!isMenuActive)
        // console.log(isMenuActive,isMenuClicked)
    },[isMenuActive])
    const sidebarstyle=useCallback(({isActive})=>{
        // console.log(isActive)
        return (
            `side-bar-item ${isActive ? 'side-bar-active' : 'side-bar-inactive' }`
        )
    },[])
    return (
        <aside className={"bg-none side-bar "+`${isMenuActive ? 'active': ''}`}>
            <div className="size-24 flex items-center side-bar-icon">
                <img onClick={onmenuClick} className={`size-14 items-center menu-logo ${isMenuClicked ? 'spin move' : '' } cursor-pointer`} src={menu_logo} />
            </div>
            <div className={` side-bar-items-container ${isMenuActive ? '' : 'hide'}`}>
                <NavLink to={"/home"} className={sidebarstyle}>
                {
                    ({isActive})=>(
                        <>
                        <div className="flex">
                        {/* <img className="size-6 mr-1" src={home_icon} /> */}
                        {
                            isActive ? 
                            <HomeRoundedIcon  style={{fontSize:"28px"}} /> :
                            <HomeOutlinedIcon style={{fontSize:"28px"}} />  
                            // <HomeIcon style={{fontSize:'28px'}} /> 
                            // <HomeTwoToneIcon />
                        }
                        </div>
                        <div>Home</div>
                        </>
                    )
                }
                    
                </NavLink>
                <NavLink to={"/archive"} className={sidebarstyle}>
                {
                    ({isActive})=>(
                        <>
                        <div className="flex">
                            {
                                isActive ?
                                <ArchiveRoundedIcon  style={{fontSize:"28px"}} /> :
                                <ArchiveOutlinedIcon style={{fontSize:"28px"}} /> 
                            }
                            {/* <img className="size-8 mr-1" src={archive_icon} /> */}
                        </div>
                        <div>Archive</div>
                        </>
                    )
                }
                </NavLink>
                <NavLink to={"/important"} className={sidebarstyle}>
                {
                    ({isActive})=>(
                        <>
                        <div className="flex">
                            {/* <img className="size-6 mr-1" src={important_icon} /> */}
                            {
                                isActive ? 
                                <LabelImportantRoundedIcon style={{fontSize:"28px"}} /> :
                                <LabelImportantOutlineIcon style={{fontSize:"28px"}} /> 
                            }
                        </div>
                        <div>Important</div>
                        </>
                    )
                }
                </NavLink>
                <NavLink to={"/bin"} className={sidebarstyle}>
                {
                    ({isActive}) =>(
                        <>
                        <div className="flex">
                            {/* <img className="size-8 mr-1" src={dustbin_icon} /> */}
                            {
                                isActive ?
                                <DeleteIcon style={{fontSize:"28px"}} /> :
                                <DeleteOutline style={{fontSize:"28px"}} />
                            }
                        </div>
                        <div>Bin</div>
                        </>
                    )
                }
                </NavLink>
            </div>
        </aside>
    )
})