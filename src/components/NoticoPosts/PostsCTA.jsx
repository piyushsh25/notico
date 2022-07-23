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
import EditIcon from '@mui/icons-material/Edit';
import { red } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

export const PostsCTA = ({ post }) => {
    const { bookmarks, showEditModal, posts } = useSelector((store) => store.postReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        (localStorage?.getItem("notico-details"))
    })
    useEffect(() => {
        dispatch(getBookmarksHandler())
    }, [dispatch, posts])
    const localStorageUserName = JSON.parse(localStorage?.getItem("notico-details"))?.foundUser?.username
    const isLiked = post.likes.likedBy.some(user => user.username === localStorageUserName)
    const userNotico = post.username === localStorageUserName
    function showCommentsHandler(post) {
        dispatch(postAction.setCommentPageHandler(true))
        dispatch(getIndividualPost(post))
    }
    let setTrue = true
    let isInBookmarks;
    async function deleteIconTrigger(post) {
        await dispatch(deletePostHandler(post))
        const isInBookmark = bookmarks.some((bookmark) => {
            return bookmark._id === post._id
        })
        if (isInBookmark) {
            await dispatch(deleteBookmarksHandler(post))
        }

    }
    const navigate = useNavigate()
    function addToBookmarkTrigger(post) {
        const token = (localStorage?.getItem("notico-token"))
        token ? dispatch(postBookmarksHandler(post)) : navigate("/login")
    }
    function likePostTrigger(post) {
        const token = (localStorage?.getItem("notico-token"))
        token ? dispatch(likePostHandler(post)) : navigate("/login")

    }
    return <div className="notico-post-cta-buttons">
        <div>
            <div>
                {isLiked ? <FavoriteIcon color="primary" onClick={() => dispatch(disLikePostHandler(post))} /> : <FavoriteBorderIcon onClick={() => likePostTrigger(post)} />}

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
                {isInBookmarks = bookmarks?.some((noticos) => {
                    return noticos._id === post._id
                })}

                {!isInBookmarks ? <BookmarkBorderIcon onClick={() => addToBookmarkTrigger(post)} /> :
                    <BookmarkIcon onClick={() => dispatch(deleteBookmarksHandler(post))} sx={{ color: blue[500] }} />}
            </div>
        </div>
        <div>
            <div>
                <ShareIcon />
            </div>
        </div>
        {userNotico &&
            <div className='cta-user-delete-edit'>
                <div>
                    <DeleteIcon onClick={() => deleteIconTrigger(post)} sx={{ color: red[500] }} />
                </div>
                <div>
                    <EditIcon color="success" onClick={() => dispatch(postAction.setEditModalHandler({ setTrue, post }))} />
                </div>
            </div>}

    </div>
}