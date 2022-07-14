import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const LandingCTA = ({ theme, Drawer, DrawerHeader, handleDrawerClose, open, LandingPageActions }) => {
    return <Drawer variant="permanent" open={open}>
        <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                <ListItem key={'Home'} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <InboxIcon />

                        </ListItemIcon>
                        <ListItemText primary={'My profile'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>

                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            {LandingPageActions.map((text, index) => (
                <ListItem key={text.action} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {text.icon}
                        </ListItemIcon>
                        <ListItemText primary={text.action} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>

            {[{ action: 'Create new Post', icon: <AddCircleIcon /> }].map((text, index) => (
                <ListItem key={text.action} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {text.icon}
                        </ListItemIcon>
                        <ListItemText primary={text.action} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Drawer>
}