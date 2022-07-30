import { useDispatch } from "react-redux";
import { setFollowUsersHandler, setUnFollowUsersHandler } from "../../Hooks/slices/usersSlice";
import Button from '@mui/material/Button';
export const FollowIcon = ({ userDetailsFromDB, user }) => {
    const dispatch = useDispatch()

    function followUserTrigger(user) {
        dispatch(setFollowUsersHandler(user))
    }
    function UnfollowUserTrigger(user) {
        dispatch(setUnFollowUsersHandler(user))
    }
    // check if it;s the user's profile
    const checkIfUserProfile = userDetailsFromDB === user
    // to check if the user is following an account
    let isFollowing;
    return <>
        {
            isFollowing = userDetailsFromDB.following.some((userFollowing) => {
                return user.username === userFollowing.username
            })
        }
        {
            checkIfUserProfile ?
                <Button variant="contained">Edit Profile</Button>
                :
                isFollowing ? <Button variant="contained" onClick={() => UnfollowUserTrigger(user)}>Following</Button> :
                    <Button variant="outlined" onClick={() => followUserTrigger(user)}>Follow</Button>
        }



    </>

}