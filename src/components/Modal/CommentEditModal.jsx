import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBookmarksHandler, editPostHandler, getBookmarksHandler, postAction, postBookmarksHandler } from '../../Hooks/slices/postSlice';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function EditCommentModal() {
    const { editCommentModal, postToEdit, bookmarks } = useSelector((store) => store.postReducer)

    return (
        <div>
            <Modal
                open={editCommentModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Editing your post....
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            maxRows={4}
                            variant="standard"
                        />
                    </Typography>
                    <Button variant="contained">Edit</Button>
                </Box>
            </Modal>
        </div>
    );
}
