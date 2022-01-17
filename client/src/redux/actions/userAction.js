import { GET_USER_BY_ID } from '../constants/actionType'
import axios from 'axios'

export const profileAction = (id) => async (dispatch) => {
    try {
        await axios.get(`/api/user/${id}`);

        dispatch({
            type : GET_USER_BY_ID,
            payload : id
        });
    } catch (error) {
        console.log(error);
    }
};
