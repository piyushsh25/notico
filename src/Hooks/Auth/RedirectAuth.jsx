
import { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
export const RedirectAuth = () => {
    useEffect(() => {
        localStorage?.getItem("notico-token")
    })
    return localStorage?.getItem("notico-token") ? <Navigate to="/" /> : <Outlet />
}