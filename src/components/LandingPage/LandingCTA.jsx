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
import ExploreIcon from '@mui/icons-material/Explore';
import { Link } from "react-router-dom"
export const LandingCTA = ({ theme, Drawer, DrawerHeader, handleDrawerClose, open, LandingPageActions, createPostIconHandler }) => {
    React.useEffect(() => {
        localStorage?.getItem("notico-token")
    })
    const token = localStorage?.getItem("notico-token")
    const username = JSON.parse(localStorage?.getItem("notico-details"))?.foundUser?.username
    const usernameLink = username ? `user/${username}` : "login"
    return <Drawer variant="permanent" open={open}>
        <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                <ListItem key={'Home'} disablePadding sx={{ display: 'block' }}>
                    <Link to={username ? `/user/${username}` : "/login"} className="cta-drawers-link">
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
                            <ListItemText primary={username ? username : "My Profile"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            {LandingPageActions.map((text) => (
                <ListItem key={text.action} disablePadding sx={{ display: 'block' }}>
                    <Link to={`${text.action === "profile" ? `/${usernameLink}` : `${text.link}`}`} className="cta-drawers-link" onClick={text.onClick}>
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
                    </Link>
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>

            {token && <ListItem key={"logout"} disablePadding sx={{ display: 'block' }}>
                <Link to="/logout" className="cta-drawers-link">
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
                            {<ExploreIcon />}
                        </ListItemIcon>
                        <ListItemText primary={"logout"} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </Link>
            </ListItem>}
            {!token && <ListItem key={"login"} disablePadding sx={{ display: 'block' }}>
                <Link to={`/login`} className="cta-drawers-link">
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
                            {<ExploreIcon />}
                        </ListItemIcon>
                        <ListItemText primary={"login"} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </Link>
            </ListItem>}

        </List>
    </Drawer>
}