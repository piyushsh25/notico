import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { NoticoFooter } from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, userAction } from '../../Hooks/slices/usersSlice';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { requiresAuth } from '../../backend/utils/authUtils';
import { Link } from 'react-router-dom';

export const LandingSuggested = ({ Drawer }) => {
    const drawerWidth = 240;
    const dispatch = useDispatch()
    const { users, state } = useSelector((store) => store.userReducer)
    React.useEffect(() => {
        if (state === "idle") {
            dispatch(getUsers())
        }
        setTimeout(() => {
            dispatch(userAction.setGetUserIdle())
        }, 1000)
    }, [])
    React.useEffect(() => {
        dispatch(getUsers())
    }, [state.users, dispatch])

    // dispatch(getUsers())
    return <Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',

            },

        }}
        className="suggested-people to-follow-section drawer-section"
        variant="permanent"
        anchor="right"
    >
        <Toolbar />
        <Divider />


        <List
        >
            {state === "loading" && <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>}
            {state === "failed" && <div>
                failed to load suggestions. refresh the page
            </div>}

            {users.slice(0, 5).map((user) => (
                <ListItem key={user._id} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Link to={`user/${user.username}`} className="cta-drawers-link">
                                <img src={user.img} alt="profile-pic" className="suggested-users-icons" />
                            </Link>
                        </ListItemIcon>
                        <div>
                            <Link to={`user/${user.username}`} className="cta-drawers-link">
                                <ListItemText primary={(user.firstName).substring(0, 10)} />
                                {user.firstName.length > 10 ? <>@{user.firstName.substring(0, 10)}...</> : <>@{user.username}</>}
                            </Link>
                        </div>
                        <Button variant="contained" className="follow-button-landing-page">Follow</Button>
                    </ListItemButton>

                </ListItem>
            ))}

        </List>
        <Divider />
        <NoticoFooter />
    </Drawer>

}