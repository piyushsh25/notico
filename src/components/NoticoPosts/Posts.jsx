import "./Posts.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const postView = {


    content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
    },
    username: "adarshbalika",

    comments: [
        {
            username: "shubhamsoni",
            text: "Interesting",
            votes: {
                upvotedBy: [],
                downvotedBy: [],
            },
        },
        {
            username: "sohamshah",
            text: "Wow!",
            votes: {
                upvotedBy: [],
                downvotedBy: [],
            },
        },
    ],
}
export const Post = () => {
    return <div className="posts-container">
        <div className="home-page-posts-header">
            latest  Noticos
        </div>

   {[1,2,3,4,5].map((num)=>{
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
                    <div className="notico-post-cta-buttons">
                        <div>
                            <FavoriteBorderIcon/>
                        </div>
                        <div>
                            <ChatBubbleOutlineIcon/>
                        </div>
                        <div>
                            <ShareIcon/>
                        </div>
                        <div>
                            <BookmarkIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   })}
    </div>
}