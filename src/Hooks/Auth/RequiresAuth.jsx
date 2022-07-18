import { useEffect } from "react"
import { Navigate,Link, Outlet, useLocation } from "react-router-dom"

export const RequiresAuth=()=>{
    useEffect(()=>{
        localStorage?.getItem("notico-token")
    })
    const location=useLocation()
    return localStorage?.getItem("notico-token")?<Outlet/>:<Navigate to="/login" state={{from:location}} replace/>
}