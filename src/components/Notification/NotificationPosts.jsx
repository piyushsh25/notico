import "./Notification.css"
import "../LandingPage/LandingPage.css"
import { Divider } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
export const NotificationPosts = () => {
    return <>
        <div className="posts-container post-body-landing-page">
            <div className="home-page-posts-header">
                latest  Notifications
            </div>
            {[1].map((num) => {
                return <div className="notico-container" key={num}>
                    <div className="notico-liked-container">
                        <div className="notico-liked-message">
                            <div>
                                <FavoriteIcon />
                            </div>
                            <div>
                            Piyush liked your post
                            </div>
                        </div>
                        <Divider />
                        <div className="notico-post-liked-content">
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
                            </div>
                        </div>
                    </div>
                </div>
            })}
            {[5].map((num) => {
                return <div className="notico-container" key={num}>
                    <div className="notico-liked-container">
                        <div className="notico-liked-message">
                            <ModeCommentIcon />
                            <div>Piyush commented</div>
                        </div>

                        <Divider />
                        <div className="notico-post-liked-content">
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
                            </div>
                        </div>
                    </div>
                </div>
            })}

        </div>
    </>
}