import { useSelector } from "react-redux";
import "../NoticoPosts/Posts.css"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { PostsCTA } from "../NoticoPosts/PostsCTA";
import CommentPage from "../Comment/CommentPage";

export const BookmarkArray = () => {
    const { postBookmarkState, bookmarks } = useSelector((store) => store.postReducer)
    const { showCommentPage } = useSelector((store) => store.postReducer)
    return <div className="posts-container post-body-landing-page">
        <div className="home-page-posts-header">
            Bookmarks
        </div>
        {postBookmarkState === "loading" && <Box sx={{ display: 'flex' }} className="circular-progress-loading landing-page-posts">
            <CircularProgress />
        </Box>}
        {postBookmarkState === "error" &&
            <div>Error loading noticos. Refresh the page</div>
        }
        {
            bookmarks.map((bookmark) => {
                return <div className="notico-container" key={bookmark._id}>
                    <div className="notico-post">
                        <div className="notico-post-icon">
                            <img src={bookmark.img} alt="profile-pic" className="suggested-users-icons" />
                        </div>
                        <div className="notico-post-content">
                            <div className="notico-post-user">
                                <div className="notico-post-user-name">
                                    {bookmark.firstName + " " + bookmark.lastName}
                                </div>
                                <div className="notico-post-user-username">
                                    @{bookmark.username}
                                </div>
                            </div>
                            <div className="notico-post-content">
                                {bookmark.content}
                            </div>
                            <PostsCTA post={bookmark} showCommentPage={showCommentPage} />
                        </div>
                    </div>
                    {showCommentPage && <CommentPage post={bookmark} />}
                </div>

            })
        }
    </div>
}