import './rightbar.css'
import Online from '../online/Online'
import {Users} from '../../dummyData'

import { useSelector, useDispatch } from 'react-redux'
import { ExitToApp } from '@material-ui/icons'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { profileAction } from '../../redux/actions/userAction'
import { logout } from '../../redux/actions/authAction'

const Rightbar = ({profile, profileInfo}) => {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthday_container">
                    <img src="assets/gift.png" alt="present" className="gift_image" />
                    <span className="birthday_text">
                        <b>Hari</b> and<b> 3 others friends</b> have birthday today.
                    </span>
                </div>
                <img className="rightbar_ad" src="assets/ad.png" alt="ad" />
                <h4 className="rightbar_title">Online friends</h4>
                <ul className="rightbar_friendList">
                    {Users.map((user) => (
                        <Online key={user.id} user={user} />
                    ))}
                </ul>
            </>
        )
    };

    const ProfileRightbar = () => {
        const dispatch = useDispatch();
        const params = useParams();
        const auth = useSelector(state => state.auth);

        const logoutHandler = () => {
            dispatch(logout());
        }

        useEffect(() => {
            dispatch(profileAction(params._id));
        }, [dispatch, params._id]);
        return (
            <>
                <h4 className="rightbar_Title">User information</h4>
                <div className="rightbar_info">
                    <div className="rightbar_info_item">
                        <span className="rightbar_info_key">Name : </span>
                        <span className="rightbar_info_value">{auth.username}</span>
                    </div>
                    <div className="rightbar_info_item">
                        <span className="rightbar_info_key">City : </span>
                        <span className="rightbar_info_value">{profileInfo.city}</span>
                    </div>
                    <div className="rightbar_info_item">
                        <span className="rightbar_info_key">From : </span>
                        <span className="rightbar_info_value">{profileInfo.from}</span>
                    </div>
                    <div className="rightbar_info_item">
                        <span className="rightbar_info_key">Relationship : </span>
                        <span className="rightbar_info_value">{profileInfo.relationShip}</span>
                    </div>
                    <ExitToApp onClick={logoutHandler} />
                </div>
                <h4 className="rightbar_Title">User friends</h4>
                <div className="rightbar_followings">
                    <div className="rightbar_following">
                        <img src="assets/person/1.jpg" alt=""  className="rightbar_following_img" />
                        <span className="rightbar_following_name">John Carter</span>
                    </div>
                    <div className="rightbar_following">
                        <img src="assets/person/8.jpeg" alt=""  className="rightbar_following_img" />
                        <span className="rightbar_following_name">Jane Doe</span>
                    </div>
                    <div className="rightbar_following">
                        <img src="assets/person/9.jpeg" alt=""  className="rightbar_following_img" />
                        <span className="rightbar_following_name">John Doe</span>
                    </div>
                    <div className="rightbar_following">
                        <img src="assets/person/10.jpeg" alt=""  className="rightbar_following_img" />
                        <span className="rightbar_following_name">Miss Tina</span>
                    </div>
                </div>
            </>
        )
    };

    return (
        <div className="rightbar">
            <div className="rightbar_wrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar
