import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
export const Time = ({post}) => {
    return <div className="notico-post-time">
        {dayjs.extend(relativeTime)}
        {dayjs(post.createdAt).fromNow()}
    </div>
}