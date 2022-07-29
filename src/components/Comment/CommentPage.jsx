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
import EditIcon from '@mui/icons-material/Edit';
import "./CommentPage.css"
import { useNavigate } from "react-router-dom"
import { getIndividualPost, getPosts, postAction, postCommentHandler } from '../../Hooks/slices/postSlice';
import { CommentCTA } from './CommentCTA';
import { Link } from "react-router-dom"
export default function CommentPage({ post }) {
    const { singlePostState, singlePostDetails, commentData } = useSelector((store) => store.postReducer)
    const dispatch = useDispatch()
    const token = localStorage?.getItem("notico-token")
    const username = JSON.parse(localStorage?.getItem("notico-details"))?.foundUser?.username
    React.useEffect(() => {
        localStorage?.getItem("notico-token")
    })
    const navigate = useNavigate()
    const editCommentTrigger = (post, comment) => {
        navigate(`/post/${post._id}`)
        const setTrue = true;
        dispatch(postAction.setEditCommentModalHandler({ setTrue, comment }))
    }
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
                    <Link to={`/user/${comment.username}`} className="cta-drawers-link">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={singlePostDetails?.img} />
                        </ListItemAvatar>
                    </Link>
                    <ListItemText
                        secondary={`replying to @ ${singlePostDetails?.username}`}
                        primary={
                            <React.Fragment>
                                <Link to={`/user/${comment.username}`} className="cta-drawers-link">
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        @{comment.username}    :
                                    </Typography>
                                </Link>
                                {"  " + comment.text}
                            </React.Fragment>
                        }

                    />
                    {hasCommented = comment.username === username}
                    {hasCommented && <EditIcon color="success" className="edit-comment-comment-page" onClick={() => editCommentTrigger(singlePostDetails, comment)} />}

                    <CommentCTA post={singlePostDetails} comment={comment} />

                </ListItem>
            })}
        </List>
    </div>
    );

}
