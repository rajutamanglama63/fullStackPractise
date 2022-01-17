import './login.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/actions/authAction';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email : "",
        password : ""
    });

    const navigateToRegisterPage = () => {
        navigate("/register");
    }

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(login(credentials.email, credentials.password));
        setCredentials({
            email : "",
            password : ""
        });
        navigate("/home");
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
                        <form className="box" onSubmit={loginHandler}>
                            <input 
                             className="input_field" 
                             type="text" 
                             placeholder="example@gmail.com" 
                             value={credentials.email}
                             onChange={(e) => setCredentials({...credentials, email : e.target.value})}
                            />
                            <input 
                             className="input_field" 
                             type="text" 
                             placeholder="enter password" 
                             value={credentials.password}
                             onChange={(e) => setCredentials({...credentials, password : e.target.value})}
                            />
                            <button type="submit" className="login_btn">Sign in</button>
                            <span className="forgot_password">Forgot Password?</span>
                            <button onClick={navigateToRegisterPage} className="register_btn">Create new account.</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login
