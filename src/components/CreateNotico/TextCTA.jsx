import ImageIcon from '@mui/icons-material/Image';
import { Button } from '@mui/material';
import GifIcon from '@mui/icons-material/Gif';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { useDispatch, useSelector } from 'react-redux';
import { createPostHandler } from '../../Hooks/slices/postSlice';
export const TextCTA = () => {
    const dispatch = useDispatch()
    const { createPost } = useSelector((store) => store.postReducer)
    return <div className='text-area-cta'>
        <div>
            <Button variant="contained" onClick={() => dispatch(createPostHandler(createPost))}>notico</Button>
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