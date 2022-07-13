import ImageIcon from '@mui/icons-material/Image';
import { Button } from '@mui/material';
import GifIcon from '@mui/icons-material/Gif';
import AddReactionIcon from '@mui/icons-material/AddReaction';
export const TextCTA = () => {
    return <div className='text-area-cta'>
        <div>
            <Button variant="contained">notico</Button>
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