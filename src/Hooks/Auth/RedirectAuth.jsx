
import { useEffect } from "react"
import {useLocation,Navigate,Outlet} from "react-router-dom"
export const RedirectAuth=()=>{
    useEffect(()=>{
        localStorage.getItem("notico-token")
    })
    const location= useLocation()
    console.log(location)
    return localStorage.getItem("notico-token") ?<Navigate to="/"/>:<Outlet/>
}