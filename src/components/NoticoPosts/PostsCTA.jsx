import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch } from 'react-redux';
import { likePostHandler } from '../../Hooks/slices/postSlice';
import { requiresAuth } from '../../backend/utils/authUtils';
export const PostsCTA = ({ post }) => {

    const dispatch = useDispatch()
    return <div className="notico-post-cta-buttons">
        <div>
            <div>
                <FavoriteBorderIcon onClick={() => dispatch(likePostHandler(post))} />
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