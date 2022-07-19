import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react"
import { deletePostHandler, disLikePostHandler, getIndividualPost, likePostHandler } from '../../Hooks/slices/postSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
export const PostsCTA = ({ post, showCommentPage, setShowCommentPage }) => {

    const dispatch = useDispatch()
    useEffect(() => {
        (localStorage?.getItem("notico-details"))
    })
    const localStorageUserName = JSON.parse(localStorage?.getItem("notico-details"))?.foundUser?.username
    const isLiked = post.likes.likedBy.some(user => user.username === localStorageUserName)
    const userNotico = post.username === localStorageUserName
    function showCommentsHandler(post) {
        setShowCommentPage(() => true)
        dispatch(getIndividualPost(post))
    }
    return <div className="notico-post-cta-buttons">
        <div>
            <div>
                {isLiked ? <FavoriteIcon color="primary" onClick={() => dispatch(disLikePostHandler(post))} /> : <FavoriteBorderIcon onClick={() => dispatch(likePostHandler(post))} />}

            </div>
            <div>
                {post.likes.likeCount}
            </div>

        </div>
        <div>
            <div>  <ChatBubbleOutlineIcon onClick={() => showCommentsHandler(post)} /> </div>
            <div>
                {post.comments.length}</div>
        </div>
        <div>
            <div>
                <ShareIcon />
            </div>
        </div>
        <div>
            <div>
                <BookmarkIcon />
            </div>
        </div>
        {userNotico &&
            <div>
                <div>
                    <DeleteIcon onClick={() => dispatch(deletePostHandler(post))} color="success" />
                </div>
            </div>}

    </div>
}