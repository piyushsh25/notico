import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux"
import CircularProgress from '@mui/material/CircularProgress';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import "./CommentPage.css"
import { useNavigate } from "react-router-dom"
import { red } from '@mui/material/colors';
import { deleteCommentHandler, getIndividualPost, getPosts, postAction, postCommentHandler } from '../../Hooks/slices/postSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { CommentCTA } from './CommentCTA';
export default function CommentPage({ post }) {
    const { singlePostState, singlePostDetails, commentData } = useSelector((store) => store.postReducer)
    const dispatch = useDispatch()
    const token = localStorage?.getItem("notico-token")
    React.useEffect(() => {
        localStorage?.getItem("notico-token")
    })
    const navigate = useNavigate()
    const localStorageUser = JSON.parse(localStorage?.getItem("notico-details"))?.foundUser?.username
    let hasCommented;
    async function commentHandler(post, commentData) {
        if (token) {
            await dispatch(postCommentHandler({ singlePostDetails, commentData }))
            await dispatch(getIndividualPost(singlePostDetails))
            await dispatch(getPosts())
        }
        else {
            navigate("/login")
        }
    }
    async function deleteCommentTrigger(post, comment) {
        await dispatch(deleteCommentHandler({ post, comment }))
        await dispatch(getIndividualPost(post))
        await dispatch(getPosts())
    }
    console.log(singlePostDetails)
    return (<div className='comment-page'>
        <List className="comment-container">
            {singlePostState === "loading" && <CircularProgress className="circular-progress-loading" />}
            {singlePostState === "error" && <div>Couldn't load comments please try later.</div>}
            <div className='comment-model-cta'>
                <TextField id="standard-basic" label="Comment" variant="standard" className="comment-modal-input" onChange={(e) => dispatch(postAction.setCommentHandler(e.target.value))} value={commentData} />
                <ArrowCircleRightIcon className="comment-modal-button" onClick={() => commentHandler(post, commentData)} />
                <CloseIcon className="comment-page-crossbar" onClick={() => dispatch(postAction.setCommentPageHandler(false))} />
            </div>

            {singlePostDetails?.comments.map((comment) => {
                return <ListItem alignItems="flex-start" key={comment._id}>
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
                   
                    {hasCommented = comment.username === localStorageUser}
                    {hasCommented && <DeleteIcon className="delete-comment-comment-page" sx={{ color: red[500] }} onClick={() => deleteCommentTrigger(singlePostDetails, comment)} />}
                    <CommentCTA {...comment}/>
                </ListItem>
            })}
        </List>
    </div>
    );

}
