import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import "./TextArea.css"
import { TextCTA } from './TextCTA';
import { Divider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { postAction } from '../../Hooks/slices/postSlice';
export default function TextArea({ showAction, setShowAction, showActionHandler }) {
    const { createPost } = useSelector((store) => store.postReducer)
    const dispatch = useDispatch()
    return <div className='text-area-container'>
        <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            className="text-area"
            placeholder="what's happening?"
            style={{ width: "60vw" }}
            onInput={() => showActionHandler(true)}
            onChange={(e) => dispatch(postAction.onInputHandler(e.target.value))}
            value={createPost}
        />
        {showAction && <><Divider />
            <TextCTA />
        </>
        }
    </div>
}
