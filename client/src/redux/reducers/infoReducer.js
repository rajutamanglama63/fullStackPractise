import { POST_INFO } from '../constants/actionType'

export const infoReducer = (state = [], action) => {
    switch(action.type) {
        case POST_INFO:
            return action.payload;
        default:
            return state;
    }
}