import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
export const ErrorComp=()=>{
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },5000)
    })
return <>
    <div>The page you want to visit is not available. Redirecting you to home page.....</div>
</>
}