import Feed from '../../components/feed/Feed'
import Navbar from '../../components/navbar/Navbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

import { useSelector } from 'react-redux' 
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    if(!auth._id) {
        navigate("/login");
    };

    return (
        <>
            <Navbar open={open} handleOpen={handleOpen} handleClose={handleClose} />
            <div className="home_container">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}

export default Home
