import {REGISTER, LOGIN, LOGOUT} from '../constants/actionType'
import axios from 'axios'

export const register = (data) => async (dispatch) => {
    try {
        const token = await axios.post('/api/auth/register', data);

        if(token) {
            localStorage.setItem("token", token.data)
        }

        dispatch({
            type : REGISTER,
            payload : token.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        const token = await axios.post('/api/auth/login', {email, password});
        

        if(token) {
            localStorage.setItem("token", token.data);
        }

        dispatch({
            type : LOGIN,
            payload : token.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type : LOGOUT
        });
    } catch (error) {
        console.log(error);
    }
}