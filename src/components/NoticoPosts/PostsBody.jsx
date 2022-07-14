import { PostsCTA } from "./PostsCTA"

export const PostBody = () => {
    return <>
        {[1, 2, 3, 4, 5].map((num) => {
            return <div className="notico-container" key={num}>
                <div className="notico-post">
                    <div className="notico-post-icon">
                        <img src="https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png" alt="profile-pic" className="suggested-users-icons" />
                    </div>
                    <div className="notico-post-content">
                        <div className="notico-post-user">
                            <div className="notico-post-user-name">
                                namee
                            </div>
                            <div className="notico-post-user-username">
                                @username
                            </div>
                        </div>
                        <div className="notico-post-content">
                            Noticos icon namee username notico post contentNoticos icon. Noticos icon namee username notico post contentNoticos icon. Noticos icon namee username notico post contentNoticos icon.Noticos icon namee username notico post contentNoticos icon Noticos icon namee username notico post contentNoticos icon
                        </div>
                        <PostsCTA/>
                    </div>
                </div>
            </div>
        })}
    </>
}