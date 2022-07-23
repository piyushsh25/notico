import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PostsCTA } from "../NoticoPosts/PostsCTA"
import { getPosts } from "../../Hooks/slices/postSlice";
export const SinglePostContent = (postToRender) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [])
    return <>
        <div className="notico-container" key={postToRender._id}>
            <div className="notico-post">
                <div className="notico-post-icon">
                    <img src={postToRender.img} alt="profile-pic" className="suggested-users-icons" />
                </div>
                <div className="notico-post-content">
                    <div className="notico-post-user">
                        <div className="notico-post-user-name">
                            {postToRender.firstName + " " + postToRender.lastName}
                        </div>
                        <div className="notico-post-user-username">
                            @{postToRender.username}
                        </div>
                    </div>
                    <div className="notico-post-content">
                        {postToRender.content}
                    </div>
                    <PostsCTA post={postToRender}/>
                </div>
            </div>
        </div>



    </>
}