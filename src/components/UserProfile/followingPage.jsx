import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../Comment/CommentPage.css"
import { useNavigate } from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export function FollowingPage({ userDetails, setShowFollowing }) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    React.useEffect(() => {
        localStorage?.getItem("notico-token")
    })
    return (<div className='comment-page following-page'>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="actions-tabs">
                    <Tab label={`Folowers (${userDetails.followers.length})`} {...a11yProps(0)} />
                    <Tab label={`Following (${userDetails.followers.length})`}  {...a11yProps(1)} />
                    <CloseIcon className="following-page-crossbar" onClick={() => setShowFollowing(false)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {userDetails.followers.length === 0 && <div className="notico-liked-display"> No followers yet :( </div>}
                {userDetails.followers.map((user) => {
                    return <>
                        <div className="notico-liked-display">
                            <div className="notico-post-icon">
                                <img src={user.img} alt="profile-pic" className="suggested-users-icons" />
                            </div>
                            <div className="notico-post-user">
                                <div className="notico-post-user-name">
                                    {user.firstName + " " + user.lastName}
                                </div>
                                <div className="notico-post-user-username">
                                    @{user.username}
                                </div>
                            </div>
                        </div>
                    </>
                })}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {userDetails.following.length === 0 && <div className="notico-liked-display"> No following yet :( </div>}
                {userDetails.following.map((user) => {
                    return <div className="notico-liked-display">
                        <div className="notico-post-icon">
                            <img src={user.img} alt="profile-pic" className="suggested-users-icons" />
                        </div>
                        <div className="notico-post-user">
                            <div className="notico-post-user-name">
                                {user.firstName + " " + user.lastName}
                            </div>
                            <div className="notico-post-user-username">
                                @{user.username}
                            </div>
                        </div>

                    </div>
                })}
            </TabPanel>
        </Box>
    </div>
    );

}
