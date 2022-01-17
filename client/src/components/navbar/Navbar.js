import {Search, Person, Chat, Notifications} from '@material-ui/icons'
import { Drawer } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux' 
import './navbar.css'


const Navbar = ({open, handleOpen, handleClose}) => {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);

    // individual profile navigation handling
    const profileNavigator = (id) => {
        navigate(`/profile/${id}`);
    };

    // individual profile setting navigation handling
    const ProfileSettingNavigator = (id) => {
        navigate(`/setting/${id}`);
    };

    return (
        <div>
            <div className="navbar">
                <div className="navbar_left">
                    <span className="logo" onClick={() => navigate("/home")}>fb_clone</span>
                </div>
                <div className="navbar_center">
                    <div className="search_bar">
                        <Search className="search_icon" />
                        <input placeholder="find friends, posts and videos" type="text" className="search_input" />
                    </div>
                </div>
                <div className="navbar_right">
                    <div className="navbar_links">
                        <span className="nav_link">Timeline</span>
                        <span className="nav_link" onClick={() => navigate("/home")}>Home</span>
                    </div>
                    <div className="navbar_icons">
                        <div className="nav_icon_item">
                            <Person />
                            <span className="nav_icon_badge">1</span>
                        </div>
                        <div className="nav_icon_item">
                            <Notifications />
                            <span className="nav_icon_badge">15</span>
                        </div>
                        <div className="nav_icon_item">
                            <Chat />
                            <span className="nav_icon_badge">10</span>
                        </div>
                    </div>
                    <img src="/assets/person/1.jpg" alt="profilePic" className="nav_img" onClick={handleOpen} />
                    <Drawer variant="persistent" anchor="right" open={open} hideBackdrop="true" >
                        
                        <ul className="drawer_list">
                            <li className="drawer_list_item" onClick={() => profileNavigator(auth._id)}>Profile</li>
                            <li className="drawer_list_item" onClick={() => ProfileSettingNavigator(auth._id)}>Setting</li>
                            <li className="drawer_list_item">Support</li>
                            <li className="drawer_list_item">Deactivate</li>
                            <li className="drawer_list_item">Help</li>
                            <li className="drawer_list_item" onClick={handleClose}>Close</li>
                        </ul>
                       
                    </Drawer>
                </div>
            </div>
        </div>
    )
}

export default Navbar
