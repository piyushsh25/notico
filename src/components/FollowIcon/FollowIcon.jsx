import { useDispatch } from "react-redux";
import { setFollowUsersHandler, setUnFollowUsersHandler } from "../../Hooks/slices/usersSlice";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
export const FollowIcon = ({ userDetailsFromDB, user }) => {
    const dispatch = useDispatch()
    const localstorageUser = JSON.parse(localStorage?.getItem("notico-details"))?.foundUser?.username
    const navigate = useNavigate()
    function followUserTrigger(user) {
        localstorageUser ? dispatch(setFollowUsersHandler(user)) : navigate("/login")

    }
    function UnfollowUserTrigger(user) {
        localstorageUser ? dispatch(setUnFollowUsersHandler(user)) : navigate("/login")
    }
    // check if it;s the user's profile
    let checkIfUserProfile = false
    let isFollowing = false;
    if (localstorageUser) {
        checkIfUserProfile = userDetailsFromDB === user
    }
    // to check if the user is following an account



    return <>
        {isFollowing=userDetailsFromDB?.following?.some((userFollowing) => {
            return user?.username === userFollowing?.username
        })}
        {
            checkIfUserProfile ?
                <Button variant="contained">Edit Profile</Button>
                :
                isFollowing ? <Button variant="contained" onClick={() => UnfollowUserTrigger(user)}>Following</Button> :
                    <Button variant="outlined" onClick={() => followUserTrigger(user)}>Follow</Button>
        }



    </>

}