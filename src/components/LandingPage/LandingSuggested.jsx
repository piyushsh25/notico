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
import { getUsers } from '../../Hooks/slices/usersSlice';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const LandingSuggested = ({ Drawer }) => {
    const drawerWidth = 240;
    const dispatch = useDispatch()
    const { users, state } = useSelector((store) => store.userReducer)
    React.useEffect(() => {
        if (state === "idle") {
            dispatch(getUsers())
        }
    }, [dispatch, state])
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
            {users.map((user, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <img src={user.img} alt="profile-pic" className="suggested-users-icons" />
                        </ListItemIcon>
                        <div>
                            <ListItemText primary={(user.firstName).substring(0, 10)} />
                            {user.firstName.length > 10 ? <>@{user.firstName.substring(0, 10)}...</> : <>@{user.username}</>}
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