import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'

import Register from "./pages/register/Register"

import Login from "./pages/login/Login"

import {Routes, Route} from "react-router-dom"
import Setting from './pages/setting/Setting'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/setting/:id" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
