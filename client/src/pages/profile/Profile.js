import './profile.css'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileAction } from '../../redux/actions/userAction'


const Profile = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);
    const profileInfo = useSelector(state => state.profileInfo);

    if(!auth._id) {
        navigate("/");
    }

    useEffect(() => {
        dispatch(profileAction(params.id));
    }, [dispatch, params.id]);
    return (
        <div>
            <Navbar />
            <div className="profile">
                <Sidebar />
                <div className="profile_right">
                    <div className="profile_right_top">
                        <div className="profile_cover">
                            <img className="profile_cover_image" src="assets/post/3.jpeg" alt="coverPic" />
                            <img className="profile_pic" src="assets/person/7.jpeg" alt="profilePic" />
                        </div>
                        <div className="profile_info">
                            <h4 className="profile_info_name">{auth.username}</h4>
                            <span className="profile_info_desc">{profileInfo.desc}</span>
                        </div>
                    </div>
                    <div className="profile_right_bottom">
                        <Feed />
                        <Rightbar profile profileInfo={profileInfo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
