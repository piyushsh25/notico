import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export const CommentCTA = (comment) => {
    return <div className="like-comment-comment-page">
        <FavoriteBorderIcon />
        <div>{comment.votes.upvotedBy.length}</div>
    </div>
}