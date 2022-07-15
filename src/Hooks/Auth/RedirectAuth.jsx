
import { useEffect } from "react"
import {useLocation,Navigate,Outlet} from "react-router-dom"
export const RedirectAuth=()=>{
    useEffect(()=>{
        localStorage.getItem("notico-token")
    })
    const location= useLocation()
    return localStorage.getItem("notico-token") ?<Navigate to="/"/>:<Outlet/>
}