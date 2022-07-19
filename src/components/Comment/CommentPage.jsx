import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from "react-redux"
import CircularProgress from '@mui/material/CircularProgress';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import "./CommentPage.css"
export default function CommentPage({ post, setShowCommentPage }) {
    const { singlePostState, singlePostDetails } = useSelector((store) => store.postReducer)

    return (<div className='comment-page'>

        <List className="comment-container">
            {singlePostState === "loading" && <CircularProgress className="circular-progress-loading" />}
            {singlePostState === "error" && <div>Couldn't load comments please try later.</div>}
            <div className='comment-model-cta'>
                <TextField id="standard-basic" label="Comment" variant="standard" className="comment-modal-input" />
                <ArrowCircleRightIcon className="comment-modal-button"/>
                <CloseIcon className="comment-page-crossbar" onClick={() => setShowCommentPage(false)} />
            </div>

            {singlePostDetails?.comments.map((comment) => {
                return <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={singlePostDetails?.img} />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={`replying to @ ${singlePostDetails?.username}`}
                        primary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    @{comment.username}    :
                                </Typography>
                                {"  " + comment.text}
                            </React.Fragment>
                        }

                    />
                </ListItem>
            })}
        </List>
    </div>
    );

}