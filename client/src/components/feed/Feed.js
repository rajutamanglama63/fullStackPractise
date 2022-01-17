import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import {Posts} from '../../dummyData'

import { useSelector } from 'react-redux'

const Feed = () => {
    const auth = useSelector(state => state.auth);
    return (
        <div className="feed">
            <Share />
            <p style={{marginTop : "50px"}}>hello {auth.username} </p>
            {Posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Feed
