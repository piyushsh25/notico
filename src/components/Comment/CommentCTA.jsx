import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { deleteCommentHandler, dislikeCommentHandler, getIndividualPost, getPosts, likeCommentHandler, postAction } from '../../Hooks/slices/postSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
export const CommentCTA = ({ post, comment }) => {
    const dispatch = useDispatch()
    const username = JSON.parse(localStorage?.getItem("notico-details"))?.foundUser?.username
    const token = localStorage.getItem("notico-token")
    let hasLikedComment;
    let hasCommented;
    const navigate=useNavigate()
    async function likeCommentTrigger(post, comment) {
        if (token) {
            await dispatch(likeCommentHandler({ post, comment }))
            await dispatch(getIndividualPost(post))
            await dispatch(getPosts())
        }else{
            navigate("/login")
        }
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

    return <div className="like-comment-comment-page">
        {/* check if the user has commented and show delete icon */}
        {hasCommented = comment.username === username}
        {/* edit comment option */}
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