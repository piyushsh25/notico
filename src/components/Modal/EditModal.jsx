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

export default function EditPostModal() {

  const { showEditModal, postToEdit, bookmarks } = useSelector((store) => store.postReducer)
  const dispatch = useDispatch()
  const { _id: postId } = postToEdit
  async function editPostTrigger(postId, postContent, postToEdit) {
    await dispatch(editPostHandler({ postId, postContent }))
    const isInBookMark = bookmarks.some((bookmark) => {
      return bookmark._id === postId
    })
    if (isInBookMark) {
      await dispatch(deleteBookmarksHandler(postToEdit))
      await dispatch(postBookmarksHandler(postToEdit))
    }
  }

  const [postContent, setPostContent] = React.useState(postToEdit.content)
  return (
    <div>
      <Modal
        open={showEditModal}
        onClose={() => dispatch(postAction.setEditModalHandler(false))}
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
              placeholder={postToEdit.content}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              multiline
              maxRows={12}
              variant="standard"
            />
          </Typography>
          <Button variant="contained" onClick={() => editPostTrigger(postId, postContent, postToEdit)}>Edit</Button>
        </Box>
      </Modal>
    </div>
  );
}
