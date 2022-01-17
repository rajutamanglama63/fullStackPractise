import './closeFriend.css'

const CloseFriend = ({user}) => {
    return (
        <div>
            <li className="sidebar_friend_list_item">
                <img className="sidebar_friend_img" src={user.profilePicture} alt="profilePic" />
                <span className="sidebar_friend_name">{user.username}</span>
            </li>
        </div>
    )
}

export default CloseFriend
