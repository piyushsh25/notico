// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { red } from '@mui/material/colors';
// import { useDispatch } from 'react-redux';
// import { likeCommentHandler } from '../../Hooks/slices/postSlice';
// export const CommentCTA = ({ post, comment }) => {
//     const dispatch = useDispatch()
//     const localStorageUser = JSON.parse(localStorage?.getItem("notico-details"))?.foundUser?.username
//     let hasLikedComment;
//     // hasLikedComment = comment.votes.upvotedBy.some((user) => {
//     //     return user.username === localStorageUser
//     // })
//     return <div className="like-comment-comment-page">
//         {/* {hasLikedComment ? <FavoriteIcon sx={{ color: red[500] }} /> : */}
//         <FavoriteBorderIcon onClick={() => dispatch(likeCommentHandler({ post, comment }))} />
//         <div>{comment.votes.upvotedBy.length}</div>
//     </div>
// }