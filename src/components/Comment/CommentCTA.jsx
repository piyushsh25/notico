import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { deleteCommentHandler, dislikeCommentHandler, getIndividualPost, getPosts, likeCommentHandler, postAction } from '../../Hooks/slices/postSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
export const CommentCTA = ({ post, comment }) => {
    const dispatch = useDispatch()
    const username = JSON.parse(localStorage?.getItem("notico-details"))?.foundUser?.username
    let hasLikedComment;
    let hasCommented;
    async function likeCommentTrigger(post, comment) {
        await dispatch(likeCommentHandler({ post, comment }))
        await dispatch(getIndividualPost(post))
        await dispatch(getPosts())
    }
    async function dislikeCommentTrigger(post, comment) {
        await dispatch(dislikeCommentHandler({ post, comment }))
        await dispatch(getIndividualPost(post))
        await dispatch(getPosts())
    }
    async function deleteCommentTrigger(post, comment) {
        await dispatch(deleteCommentHandler({ post, comment }))
        await dispatch(getIndividualPost(post))
        await dispatch(getPosts())
    }
    const navigate=useNavigate()
    const editCommentTrigger = (post, comment) => {
        navigate(`/${post._id}`)
        dispatch(postAction.setEditCommentModalHandler())
    }
    return <div className="like-comment-comment-page">
        {/* check if the user has commented and show delete icon */}
        {hasCommented = comment.username === username}
        {/* edit comment option */}
        {hasCommented && <EditIcon color="success" onClick={() => editCommentTrigger(post, comment)} />}
        {hasCommented && <DeleteIcon sx={{ color: red[500] }} onClick={() => deleteCommentTrigger(post, comment)} />}
        {/* check if the comment has already been liked by the user */}
        {hasLikedComment = comment.votes.upvotedBy.some((user) => {
            return user.username === username
        })}
        {hasLikedComment ? <FavoriteIcon sx={{ color: red[500] }} onClick={() => dislikeCommentTrigger(post, comment)} /> :
            <FavoriteBorderIcon onClick={() => likeCommentTrigger(post, comment)} />}
        <div>{comment.votes.upvotedBy.length}</div>
    </div>
}