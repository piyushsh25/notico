import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PostsCTA } from "../NoticoPosts/PostsCTA"
import { getPosts } from "../../Hooks/slices/postSlice";
import { EditCommentModal } from "../Modal/CommentEditModal"
import {Link} from "react-router-dom"
export const SinglePostContent = (postToRender) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [])
    const { editCommentPage } = useSelector((store) => store.postReducer)

    return <>
        <div className="notico-container" key={postToRender._id}>
            <div className="notico-post">
                <Link to={`/user/${postToRender.username}`} className="cta-drawers-link">
                <div className="notico-post-icon">
                    <img src={postToRender.img} alt="profile-pic" className="suggested-users-icons" />
                </div>
                </Link>
            <div className="notico-post-content">
            <Link to={`/user/${postToRender.username}`} className="cta-drawers-link">
                <div className="notico-post-user">
                    <div className="notico-post-user-name">
                        {postToRender.firstName + " " + postToRender.lastName}
                    </div>
                    <div className="notico-post-user-username">
                        @{postToRender.username}
                    </div>
                </div>
                </Link>
                <div className="notico-post-content">
                    {postToRender.content}
                </div>
                <PostsCTA post={postToRender} />
            </div>

        </div>
        {editCommentPage && <EditCommentModal post={postToRender} />}
    </div>



    </>
}