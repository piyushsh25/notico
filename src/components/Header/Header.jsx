import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';

export const Header=({AppBar,open,handleDrawerOpen})=>{
    
    return <AppBar position="fixed" open={open}>
       <CssBaseline />
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Link to="/" className="cta-drawers-link color-white">
      <Typography variant="h4" noWrap component="div" className="notico-header">
        notico
      </Typography>
      </Link>
    </Toolbar>
  </AppBar>
}