import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "../LandingPage/LandingPage.css"
import { LandingSuggested } from "../LandingPage/LandingSuggested"

import { LandingCTA } from '../LandingPage/LandingCTA';
import { Header } from '../Header/Header';
import { useLocation } from "react-router-dom"
import { AppBar, Drawer, DrawerHeader, LandingPageActions } from "../../Hooks/LandingControllers"
import { ProfileHeader } from './ProfileHeader';
import { useSelector } from 'react-redux';
import { UserPosts } from './UserPosts';
import { Divider } from '@mui/material';
import {FollowingPage} from './followingPage';
export function UserProfile() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    //create post cta
    const [showAction, setShowAction] = React.useState(false)
    function showActionHandler(value) {
        setShowAction(value)
    }
    // extracting the route to access the name of the user
    const location = useLocation()
    const userName = location.pathname.slice(6, location.pathname.length)
    const { users } = useSelector((store) => store.userReducer)
    // finding the user details in the user state 
    const userDetails = users.find((user) => {
        return user?.username === userName
    })
    // extracting the posts from post Reducer
    const { posts } = useSelector((store) => store.postReducer)
    // check the post details if it belongs to the user
    const postFromUser = posts?.filter((post) => {
        return post?.username === userName
    })
    // state for follow unfollow page
    const [showFollowing,setShowFollowing]=React.useState(false)
    return (
        <Box sx={{ display: 'flex' }} onClick={() => showActionHandler(false)}>
            <Header AppBar={AppBar} open={open} handleDrawerOpen={handleDrawerOpen} />
            <LandingCTA theme={theme} Drawer={Drawer} DrawerHeader={DrawerHeader} handleDrawerClose={handleDrawerClose} open={open} LandingPageActions={LandingPageActions} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="post-body-landing-page">
                <DrawerHeader />
                {/* the posts {noticos} */}
                <Typography paragraph>
                    <ProfileHeader userDetails={userDetails} postFromUser={postFromUser} setShowFollowing={setShowFollowing}/>
                    <UserPosts postFromUser={postFromUser}/>
                    {showFollowing && <FollowingPage userDetails={userDetails} setShowFollowing={setShowFollowing}/>}
                </Typography>
            </Box>
            <LandingSuggested Drawer={Drawer} />
 
        </Box>
    );
}
