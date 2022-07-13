import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import "./TextArea.css"
import { TextCTA } from './TextCTA';
import { Divider } from '@mui/material';
export default function TextArea() {
    return <div className='text-area-container'>
        <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            className="text-area"
            placeholder="what's happening?"
            style={{ width: "60vw" }}
        />
        <Divider />
        <TextCTA />
    </div>
}
