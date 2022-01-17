import './register.css'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { register } from '../../redux/actions/authAction';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username : "",
        email : "",
        password : ""
    });

    const navigateToLoginPage = () => {
        navigate('/login');
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(userData));
        setUserData({
            username : "",
            email : "",
            password : ""
        });
        navigate('/home')
    }
    return (
        <div>
            <div className="login">
                <div className="login_wrapper">
                    <div className="login_left">
                        <h3 className="header_logo">fb_clone</h3>
                        <span className="slogan">Connect with friends and the world around you.</span>
                    </div>
                    <div className="login_right">
                        <form className="box" onSubmit={submitHandler}>
                            <input 
                                className="input_field" 
                                type="text" 
                                placeholder="enter username" 
                                value={userData.username}
                                onChange={(e) => setUserData({...userData, username : e.target.value})}
                            />
                            <input 
                                className="input_field" 
                                type="text" 
                                placeholder="example@gmail.com" 
                                value={userData.email}
                                onChange={(e) => setUserData({...userData, email : e.target.value})}
                            />
                            <input 
                                className="input_field" 
                                type="text" 
                                placeholder="enter password" 
                                value={userData.password}
                                onChange={(e) => setUserData({...userData, password : e.target.value})}
                            />
                            {/* <input className="input_field" type="text" placeholder="conform password" /> */}
                            <button type="submit" className="login_btn">Sign up</button>
                            <button onClick={navigateToLoginPage} className="register_btn">Log into account.</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
