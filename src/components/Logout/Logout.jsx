import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export const Logout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.clear()
        setTimeout(() => {
            navigate("/")
        }, 1000)
    },[])
    return <div>Logging you out</div>
}