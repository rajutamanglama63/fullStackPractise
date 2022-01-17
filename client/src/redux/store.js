import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {authReducer} from './reducers/authReducer'
import { userReducer } from './reducers/userReducer'
import { infoReducer } from './reducers/infoReducer'

const middleware = [thunk]

const reducers = combineReducers({
    auth : authReducer,
    users : userReducer,
    profileInfo : infoReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;