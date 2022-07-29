import "./Profile.css"
export const ProfileHeader = ({ userDetails, postFromUser }) => {
    return <>
        <div class="header-container">
            <div class="profile-header-container">
                <div class="profile-page-ing-username">
                    <div><img src={userDetails.img} alt={userDetails.username} class="img-circle-user" /></div>
                    <div class="username-profile-page">@{userDetails.username}</div>
                </div>
                <div class="col-md-9 p-t-2">

                    <div>{userDetails.firstName} {userDetails.lastName}</div>
                    <div><strong>{postFromUser.length}</strong> posts</div>
                    <div>
                        <strong>{userDetails.followers.length}</strong> followers
                        <strong>{"     "+userDetails.following.length}</strong> following
                    </div>

                </div>
            </div>
        </div>
    </>
}