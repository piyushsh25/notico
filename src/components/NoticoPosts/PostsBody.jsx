import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../../Hooks/slices/postSlice"
import { PostsCTA } from "./PostsCTA"

export const PostBody = () => {
    const {state,posts}=useSelector((store)=>store.postReducer)

    const dispatch=useDispatch()
    useEffect(()=>{
        if(state==="idle"){
            dispatch(getPosts())
        }
    },[state,dispatch])
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
                                {post.firstName+" "+post.lastName}
                            </div>
                            <div className="notico-post-user-username">
                                @{post.username}
                            </div>
                        </div>
                        <div className="notico-post-content">
                            {post.content}
                        </div>
                        <PostsCTA post={post}/>
                    </div>
                </div>
            </div>
        })}
    </>
}