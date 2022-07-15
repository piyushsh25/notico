import { useSelector } from "react-redux";
import "./Posts.css"
import { PostBody } from "./PostsBody";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Post = () => {
    const { state } = useSelector((store) => store.postReducer)
    console.log(state)
    return <div className="posts-container post-body-landing-page">
        <div className="home-page-posts-header">
            latest  Noticos
        </div>
        {state === "loading" && <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>}
        {state === "error" &&
            <div>Error loading noticos. Refresh the page</div>
        }

        <PostBody />

    </div>
}