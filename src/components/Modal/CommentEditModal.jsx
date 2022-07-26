import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { postAction,getIndividualPost, editCommentHandler,getPosts } from '../../Hooks/slices/postSlice';

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

export function EditCommentModal({ post }) {
    const { editCommentPage, commentToEdit } = useSelector((store) => store.postReducer)
    const dispatch = useDispatch()
    // use state for changing and storing the comment
    const [newComment, setNewComment] = React.useState(commentToEdit.text)
    function editCommentTrigeer(post, comment,commentData) {
        dispatch(editCommentHandler({ post, comment,commentData }))
        dispatch(postAction.setEditCommentModalHandler(false))
    }
    return (
        <div>
            <Modal
                open={editCommentPage}
                onClose={() => dispatch(postAction.setEditCommentModalHandler(false))}
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
                            maxRows={12}
                            variant="standard"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                    </Typography>
                    <Button variant="contained" onClick={() => editCommentTrigeer(post, commentToEdit,newComment)}>Edit</Button>
                </Box>
            </Modal>
        </div>
    );
}
