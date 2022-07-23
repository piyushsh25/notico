import { useDispatch, useSelector } from "react-redux";
import "../NoticoPosts/Posts.css"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { SinglePostContent } from "./PostContent";
import { useLocation, useNavigate } from "react-router-dom";
import CommentPage from "../Comment/CommentPage";
import SinglePostActions from "./SinglePostActions";
export const PostSingle = () => {
    const location = useLocation()
    const idToFind = location.pathname.slice(1, location.pathname.length)
    const { posts } = useSelector((store) => store.postReducer)
    const postToRender = posts.find((post) => {
        return post._id === idToFind
    })
    const { state, showCommentPage } = useSelector((store) => store.postReducer)
    return <div className="posts-container post-body-landing-page">
        {state === "loading" && <Box sx={{ display: 'flex' }} className="circular-progress-loading landing-page-posts">
            <CircularProgress />
        </Box>}
        {state === "error" &&
            <div>Error loading noticos. Refresh the page</div>
        }

        <SinglePostContent {...postToRender} />
        <SinglePostActions {...postToRender}/>
        {showCommentPage && <CommentPage post={postToRender} />}
    </div>
}