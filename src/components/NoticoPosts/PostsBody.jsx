import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../../Hooks/slices/postSlice"
import { PostsCTA } from "./PostsCTA"
import CommentPage from "../Comment/CommentPage";
import { useState } from "react";
import { Hidden } from "@mui/material";

export const PostBody = () => {
    const { state, posts } = useSelector((store) => store.postReducer)
    const [showCommentPage, setShowCommentPage] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        if (state === "idle") {
            dispatch(getPosts())
        }
        showCommentPage ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "scroll")

    }, [state, dispatch, showCommentPage])

    return <>
        {posts.map((post) => {
            return <div className="notico-container" key={post._id}>
                <div className="notico-post">
                    <div className="notico-post-icon">
                        <img src={post.img} alt="profile-pic" className="suggested-users-icons" />
                    </div>
                    <div className="notico-post-content">
                        <div className="notico-post-user">
                            <div className="notico-post-user-name">
                                {post.firstName + " " + post.lastName}
                            </div>
                            <div className="notico-post-user-username">
                                @{post.username}
                            </div>
                        </div>
                        <div className="notico-post-content">
                            {post.content}
                        </div>
                        <PostsCTA post={post} showCommentPage={showCommentPage} setShowCommentPage={setShowCommentPage} />
                    </div>
                </div>
                {showCommentPage && <CommentPage post={post} setShowCommentPage={setShowCommentPage} />}
            </div>

        })}

    </>
}