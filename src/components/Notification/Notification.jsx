import { useTheme } from "@emotion/react";
import React from "react";
import { LandingCTA } from "../LandingPage/LandingCTA"
import { LandingSuggested } from "../LandingPage/LandingSuggested"
import { Drawer, DrawerHeader, LandingPageActions, AppBar } from "../../Hooks/LandingCongtollers";
import { Header } from '../Header/Header';
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
        <Header AppBar={AppBar} open={open} handleDrawerOpen={handleDrawerOpen} />
        <LandingCTA theme={theme} Drawer={Drawer} DrawerHeader={DrawerHeader} handleDrawerClose={handleDrawerClose} open={open} LandingPageActions={LandingPageActions} />
        <LandingSuggested Drawer={Drawer} />
    </>
}