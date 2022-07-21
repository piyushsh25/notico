import ImageIcon from '@mui/icons-material/Image';
import { Button } from '@mui/material';
import GifIcon from '@mui/icons-material/Gif';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { useDispatch, useSelector } from 'react-redux';
import { createPostHandler } from '../../Hooks/slices/postSlice';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
export const TextCTA = () => {
    const dispatch = useDispatch()
    const { createPost } = useSelector((store) => store.postReducer)
    const token = localStorage?.getItem("notico-token")
    useEffect(() => {
        localStorage?.getItem("notico-token")
    })
    const navigate = useNavigate()
    function createPostTrigger(createPost) {
        token ? dispatch(createPostHandler(createPost)) : navigate("/login")
    }

    return <div className='text-area-cta'>
        <div>
            <Button variant="contained" onClick={() => createPostTrigger(createPost)}>notico</Button>
        </div>
        <div>
            <ImageIcon />
        </div>
        <div>
            <GifIcon />
        </div>
        <div>
            <AddReactionIcon />
        </div>
    </div>
}