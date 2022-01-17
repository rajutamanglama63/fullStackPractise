import { GET_USER_BY_ID } from '../constants/actionType'

export const userReducer = (state = [], action) => {
    switch(action.type) {
        case GET_USER_BY_ID:
            return action.payload;
        default:
            return state;
    }
}