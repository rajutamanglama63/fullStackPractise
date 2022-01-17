import {REGISTER, LOGIN, LOGOUT} from '../constants/actionType'
import jwtDecode from 'jwt-decode'

const initialState = {
    accessToken : localStorage.getItem("token"),
    _id : null,
    username : null,
    email : null
};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER:
        case LOGIN:
            const user = jwtDecode(action.payload);
            console.log(user);
            return {...state, _id : user._id, email : user.email, username : user.username}
        case LOGOUT:
            localStorage.removeItem("token");
            return {...state, _id : null, email : null, username : null}
        default:
            return state;
    }
};
