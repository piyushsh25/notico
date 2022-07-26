import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "../LandingPage/LandingPage.css"
import { LandingCTA } from '../LandingPage/LandingCTA';
import { LandingSuggested } from '../LandingPage/LandingSuggested';
import { Header } from '../Header/Header';

import { AppBar, Drawer, DrawerHeader, LandingPageActions } from "../../Hooks/LandingControllers"
import { PostSingle } from './PostSingle';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../Hooks/slices/postSlice';
export default function SinglePageComponent() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [showAction,setShowAction] = React.useState(false)

  //create post cta
  function showActionHandler(value) {
    setShowAction(value)
  }
  const {state}=useSelector((store)=>store.postReducer)
  const dispatch=useDispatch()
  React.useEffect(() => {
    if (state === "idle") {
        dispatch(getPosts())
    }

}, [state, dispatch])

  return (
    <Box sx={{ display: 'flex' }} onClick={() => showActionHandler(false)}>
      <Header AppBar={AppBar} open={open} handleDrawerOpen={handleDrawerOpen} />
      <LandingCTA theme={theme} Drawer={Drawer} DrawerHeader={DrawerHeader} handleDrawerClose={handleDrawerClose} open={open} LandingPageActions={LandingPageActions} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="post-body-landing-page">
        <DrawerHeader />
        {/* create new posts */}
        {/* the posts {noticos} */}
        <Typography paragraph>
          <PostSingle />
        </Typography>
      </Box>
      <LandingSuggested Drawer={Drawer} />
    </Box>
  );
}
