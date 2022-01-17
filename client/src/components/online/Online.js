import './online.css'

const Online = ({user}) => {
    return (
        <div>
            <li className="rightbar_friend">
                <div className="rightbarProfileImgContainer">
                    <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">{user.username}</span>
            </li>
        </div>
    )
}

export default Online
