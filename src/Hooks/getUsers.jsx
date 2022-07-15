import axios from "axios";
import { useEffect, useState } from "react";

export const GetUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const  {data} = await axios.get("/api/users")
                setUsers(data.users)
            } catch (err) {
                console.log("error from get users", err)
            }
        })()
    }, [users])
    return {users,setUsers}
}