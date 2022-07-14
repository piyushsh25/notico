import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import "./LandingPage.css"
import Textarea from '../CreateNotico/TextArea';

import { Post } from '../NoticoPosts/Posts';
import { LandingCTA } from './LandingCTA';
import { LandingSuggested } from './LandingSuggested';
import { Header } from '../Header/Header';

import {AppBar,Drawer,DrawerHeader,LandingPageActions} from "../../Hooks/LandingCongtollers"
export default function HomePage() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header AppBar={AppBar} open={open} handleDrawerOpen={handleDrawerOpen}/>
      <LandingCTA theme={theme} Drawer={Drawer} DrawerHeader={DrawerHeader} handleDrawerClose={handleDrawerClose} open={open} LandingPageActions={LandingPageActions} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* create new posts */}
        <Textarea />
        {/* the posts {noticos} */}
        <Typography paragraph>
          <Post />
        </Typography>
      </Box>
      <LandingSuggested Drawer={Drawer} />
    </Box >
  );
}
