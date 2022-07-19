import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "../LandingPage/LandingPage.css"
import { LandingSuggested } from '../LandingPage/LandingSuggested';
import { Header } from '../Header/Header';
import { AppBar, Drawer, DrawerHeader, LandingPageActions } from "../../Hooks/LandingControllers"
import { BookmarkArray } from './BookmarkArray';
import { LandingCTA } from '../LandingPage/LandingCTA';
export default function BookmarkPage() {
    const theme =  useTheme();
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

    return (
        <Box sx={{ display: 'flex' }} onClick={() => showActionHandler(false)}>
            <Header AppBar={AppBar} open={open} handleDrawerOpen={handleDrawerOpen} />
            <LandingCTA theme={theme} Drawer={Drawer} DrawerHeader={DrawerHeader} handleDrawerClose={handleDrawerClose} open={open} LandingPageActions={LandingPageActions} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="post-body-landing-page">
                <DrawerHeader />
                {/* the posts {noticos} */}
                <Typography paragraph>
                    <BookmarkArray />
                </Typography>
            </Box>
            <LandingSuggested Drawer={Drawer} />
        </Box>
    );
}
