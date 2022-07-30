import "./Profile.css"
import Button from '@mui/material/Button';
import { FollowIcon } from "../FollowIcon/FollowIcon";
import { useSelector } from "react-redux";
export const ProfileHeader = ({ userDetails, postFromUser, setShowFollowing }) => {
    // search the usernname from the localstorage and check in the database
    const localstorageUser = JSON.parse(localStorage?.getItem("notico-details"))?.foundUser?.username
    const { users } = useSelector((store) => store.userReducer)
    let userDetailsFromDB;
    if (localstorageUser) {
        userDetailsFromDB = users?.find((user) => {
            return user?.username === localstorageUser
        })
    }

    return <>
        <div className="header-container">
            <div className="profile-header-container">
                <div className="profile-page-ing-username">
                    <div><img src={userDetails.img} alt={userDetails.username} className="img-circle-user" /></div>
                    <div className="username-profile-page">@{userDetails.username}</div>
                </div>
                <div className="col-md-9 p-t-2">

                    <div>{userDetails.firstName} {userDetails.lastName}</div>
                    <div><strong>{postFromUser?.length}</strong> posts</div>
                    <div onClick={() => setShowFollowing(true)} className="followers-following-text-header-page">
                        <strong>{userDetails?.followers?.length}</strong> followers
                        <strong>{"     " + userDetails.following.length}</strong> following
                    </div> 
                    {/* here userdetails is the details of the post */}
                    <FollowIcon userDetailsFromDB={userDetailsFromDB} user={userDetails} />
                </div>
            </div>

        </div>
    </>
}