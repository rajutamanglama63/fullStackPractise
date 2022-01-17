import './setting.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { infoAction } from '../../redux/actions/infoAction';

const Setting = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({
        city : "",
        from : "",
        relationShip : "",
        desc : ""
    });

    const profileInfoHandler = (e) => {
        e.preventDefault();
        dispatch(infoAction(profileData));
        navigate(`/profile/${params.id}`)
    }
    return (
        <div>
            <div className="add_info">
                <h2 className="add_info_heading">Complete your profile</h2>
                <form className="add_your_info" noValidate autoComplete="off" onSubmit={profileInfoHandler}>
                    <input 
                     className="info_input_field" 
                     placeholder="city" 
                     type="text" 
                     value={profileData.city}
                     onChange={(e) => setProfileData({...profileData, city : e.target.value})}
                    />
                    <input 
                     className="info_input_field" 
                     placeholder="from" 
                     type="text" 
                     value={profileData.from}
                     onChange={(e) => setProfileData({...profileData, from : e.target.value})}
                    />
                    <input 
                     className="info_input_field" 
                     placeholder="relationship" 
                     type="text" 
                     value={profileData.relationShip}
                     onChange={(e) => setProfileData({...profileData, relationShip : e.target.value})}
                    />
                    <textarea 
                     className="info_input_field" 
                     placeholder="description_about_yourself" 
                     type="text" 
                     value={profileData.desc}
                     onChange={(e) => setProfileData({...setProfileData, desc : e.target.value})}
                    />
                    <button type="submit" className="add_info_btn">Add</button>
                </form>
            </div>
        </div>
    )
}

export default Setting
