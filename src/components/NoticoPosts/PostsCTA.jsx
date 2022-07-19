import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react"
import { deleteBookmarksHandler, deletePostHandler, disLikePostHandler, getBookmarksHandler, getIndividualPost, likePostHandler, postAction, postBookmarksHandler } from '../../Hooks/slices/postSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
export const PostsCTA = ({ post, showCommentPage }) => {
    const { bookmarks } = useSelector((store) => store.postReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        (localStorage?.getItem("notico-details"))
    })
    useEffect(()=>{
        dispatch(getBookmarksHandler())
    },[])
    const localStorageUserName = JSON.parse(localStorage?.getItem("notico-details"))?.foundUser?.username
    const isLiked = post.likes.likedBy.some(user => user.username === localStorageUserName)
    const userNotico = post.username === localStorageUserName
    function showCommentsHandler(post) {
        dispatch(postAction.setCommentPageHandler(true))
        dispatch(getIndividualPost(post))
    }
    let isInBookmarks;
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
                {isInBookmarks = bookmarks?.some((noticos) => {
                   
                    return noticos._id === post._id
                })}

                {!isInBookmarks ? <BookmarkBorderIcon onClick={() => dispatch(postBookmarksHandler(post))} /> :
                    <BookmarkIcon onClick={()=>dispatch(deleteBookmarksHandler(post))}/>}
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