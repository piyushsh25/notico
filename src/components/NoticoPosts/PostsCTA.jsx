import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch } from 'react-redux';
import { useEffect } from "react"
import { disLikePostHandler, likePostHandler } from '../../Hooks/slices/postSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
export const PostsCTA = ({ post }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        (localStorage?.getItem("notico-details"))
    })
    const localStorageUserName = JSON.parse(localStorage?.getItem("notico-details"))?.foundUser?.username

    const isLiked = post.likes.likedBy.some(user => user.username === localStorageUserName)

    return <div className="notico-post-cta-buttons">
        <div>
            <div>
                {isLiked ? <FavoriteIcon color="primary" onClick={()=>dispatch(disLikePostHandler(post))}/> : <FavoriteBorderIcon onClick={() => dispatch(likePostHandler(post))} />}

            </div>
            <div>
                {post.likes.likeCount}
            </div>

        </div>
        <div>
            <div>  <ChatBubbleOutlineIcon /> </div>
            <div>
                {post.comments.length}</div>
        </div>
        <div>
            <ShareIcon />
        </div>
        <div>
            <BookmarkIcon />
        </div>
    </div>
}