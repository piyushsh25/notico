import { useTheme } from "@emotion/react";
import React from "react";
import { LandingCTA } from "../LandingPage/LandingCTA"
import { LandingSuggested } from "../LandingPage/LandingSuggested"
import { Drawer, DrawerHeader, LandingPageActions, AppBar } from "../../Hooks/LandingCongtollers";
import { Header } from '../Header/Header';
import { NotificationPosts } from "./NotificationPosts";
import { Box, Typography } from "@mui/material";
export const Notification = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return <>

       <Box sx={{ display: 'flex' }}>
      <Header AppBar={AppBar} open={open} handleDrawerOpen={handleDrawerOpen}/>
      <LandingCTA theme={theme} Drawer={Drawer} DrawerHeader={DrawerHeader} handleDrawerClose={handleDrawerClose} open={open} LandingPageActions={LandingPageActions} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="post-body-landing-page">
        <DrawerHeader />
        {/* the posts {noticos} */}
        <Typography paragraph>
        <NotificationPosts/>
        </Typography>
      </Box>
      <LandingSuggested Drawer={Drawer} />
    </Box >
    </>
}