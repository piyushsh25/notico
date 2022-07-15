import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
export const PostsCTA = ({ post }) => {
    console.log(post)
    return <div className="notico-post-cta-buttons">
        <div>
            <div>
                <FavoriteBorderIcon />
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