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


export const LandingSuggested = ({ Drawer }) => {
    const drawerWidth = 240;
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
            {['someddddddddddddddddccccccccccccccccccccccdddddddd', 'user', 'to', 'follow'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <img src="https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png" alt="profile-pic" className="suggested-users-icons" />
                        </ListItemIcon>
                        <div>
                            <ListItemText primary={text.substring(0, 10)} />

                            {text.length > 10 ? <>@{text.substring(0, 10)}...</> : <>@{text}</>}
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