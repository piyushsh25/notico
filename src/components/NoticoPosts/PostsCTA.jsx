import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
export const PostsCTA=()=>{
    return <div className="notico-post-cta-buttons">
    <div>
        <FavoriteBorderIcon/>
    </div>
    <div>
        <ChatBubbleOutlineIcon/>
    </div>
    <div>
        <ShareIcon/>
    </div>
    <div>
        <BookmarkIcon/>
    </div>
</div>
}