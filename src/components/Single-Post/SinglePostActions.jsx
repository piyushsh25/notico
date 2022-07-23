import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./SinglePost.css"
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

export default function SinglePostActions(postToRender) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(postToRender)
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="actions-tabs">
                    <Tab label={`comments (${postToRender.comments.length})`} {...a11yProps(0)} />
                    <Tab label={`Likes (${postToRender.likes.likeCount})`}  {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {postToRender.comments.map((post) => {
                    return <>
                        <div className="notico-post" key={post._id}>
                            <div className="notico-post-icon">
                                <img src={post.img} alt="profile-pic" className="suggested-users-icons" />
                            </div>
                            <div className="notico-post-content">
                                <div className="notico-post-user">
                                    <div className="notico-post-user-name">
                                        {post.firstName + " " + post.lastName}
                                    </div>
                                    <div className="notico-post-user-username">
                                        @{post.username}
                                    </div>
                                </div>
                                <div className="notico-post-content">
                                    {post.text}

                                </div>
                            </div>
                        </div>

                    </>
                })}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {postToRender.likes.likedBy.map((user) => {
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
    );
}
