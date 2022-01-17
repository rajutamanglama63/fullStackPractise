import { MoreVert } from '@material-ui/icons'
import { Users } from '../../dummyData'
import { useState } from 'react'
import './post.css'

const Post = ({post}) => {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }
    return (
        <div>
            <div className="post">
                <div className="post_wraper">
                    <div className="post_top">
                        <div className="post_top_left">
                            <img className="userPic" src={Users.filter((user) => user.id === post?.userId)[0].profilePicture} alt="profilePic" />
                            <span className="post_username">{Users.filter((user) => user.id === post?.userId)[0].username}</span>
                            <span className="post_date">{post.date}</span>
                        </div>
                        <div className="post_top_right">
                            <MoreVert />
                        </div>
                    </div>
                    <div className="post_center">
                        <span className="post_text">{post.desc}</span>
                        <img className="post_img" src={post.photo} alt="postImg" />
                    </div>
                    <div className="post_bottom">
                        <div className="post_bottom_left">
                            <img className="like_icon" src="assets/like.png" alt="thumbUp" onClick={likeHandler} />
                            <img className="like_icon" src="assets/heart.png" alt="heart" onClick={likeHandler} />
                            <span className="post_like_counter">{like} people like it.</span>
                        </div>
                        <div className="post_bottom_right">
                            <span className="post_comment_text">{post.comment} comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
