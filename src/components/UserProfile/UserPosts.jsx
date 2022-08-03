import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../../Hooks/slices/postSlice"
import { PostsCTA } from "../NoticoPosts/PostsCTA"
import CommentPage from "../Comment/CommentPage";
import { Link } from "react-router-dom";
import { Time } from "../NoticoPosts/Time";
import dayjs from "dayjs";
export const UserPosts = ({ postFromUser }) => {
    const { state, showCommentPage } = useSelector((store) => store.postReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        if (state === "idle") {
            dispatch(getPosts())
        }
        showCommentPage ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "scroll")
    }, [state, dispatch, showCommentPage])
    postFromUser.sort((a, b) => {
        console.log(dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? 1 : -1)
        return dayjs(b.createdAt).isAfter(dayjs(a.createdAt)) ? 1 : -1
    })
    console.log(postFromUser)
    return <div className="post-body-unique-page">
        {postFromUser.length === 0 && <div className="posts-container post-body-landing-page">No posts yet</div>}
        {postFromUser.map((post) => {
            return <div className="posts-container post-body-landing-page" key={post._id}>
                <div className="notico-container">
                    <div className="notico-post">
                        <Link to={`/user/${post.username}`} className="notico-post-content-link">
                            <div className="notico-post-icon">
                                <img src={post.img} alt="profile-pic" className="suggested-users-icons" />
                            </div>
                        </Link>
                        <div className="notico-post-content">
                            <Link to={`/user/${post.username}`} className="notico-post-content-link">
                                <div className="notico-post-user">
                                    <div className="notico-post-user-name">
                                        {post.firstName + " " + post.lastName}
                                    </div>
                                    <div className="notico-post-user-username">
                                        @{post.username}
                                    </div>
                                    <Time post={post} />
                                </div>
                            </Link>
                            <div className="notico-post-content">
                                <Link to={`/post/${post._id}`} className="notico-post-content-link">
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