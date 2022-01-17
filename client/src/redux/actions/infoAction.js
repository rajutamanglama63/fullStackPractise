import { POST_INFO } from '../constants/actionType'
import axios from 'axios'
import { setHeaders } from '../../setHeaders';

export const infoAction = (info) => async (dispatch) => {
    try {
        const userProfileInfo = await axios.post('/api/info', info, setHeaders());

        dispatch({
            type : POST_INFO,
            payload : userProfileInfo.data
        });
    } catch (error) {
        console.log(error);
    }
}