import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../../Hooks/slices/postSlice"
import { PostsCTA } from "../NoticoPosts/PostsCTA"
import CommentPage from "../Comment/CommentPage";
import { Link } from "react-router-dom";

export const UserPosts = ({ postFromUser }) => {
    const { state, posts, showCommentPage } = useSelector((store) => store.postReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        if (state === "idle") {
            dispatch(getPosts())
        }
        showCommentPage ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "scroll")
    }, [state, dispatch, showCommentPage])
    return <div className="post-body-unique-page">
        {postFromUser.map((post) => {
            return <div className="posts-container post-body-landing-page">
                <div className="notico-container" key={post._id}>
                    <div className="notico-post">
                        <Link to={`user/${post.username}`} className="notico-post-content-link">
                            <div className="notico-post-icon">
                                <img src={post.img} alt="profile-pic" className="suggested-users-icons" />
                            </div>
                        </Link>
                        <div className="notico-post-content">
                            <Link to={`user/${post.username}`} className="notico-post-content-link">
                                <div className="notico-post-user">
                                    <div className="notico-post-user-name">
                                        {post.firstName + " " + post.lastName}
                                    </div>
                                    <div className="notico-post-user-username">
                                        @{post.username}
                                    </div>
                                </div>
                            </Link>
                            <div className="notico-post-content">
                                <Link to={`/${post._id}`} className="notico-post-content-link">
                                    {post.content}
                                </Link>
                            </div>
                            <PostsCTA post={post} />
                        </div>
                    </div>
                    {showCommentPage && <CommentPage post={post} />}
                </div>
            </div>
        })}

    </div>
}