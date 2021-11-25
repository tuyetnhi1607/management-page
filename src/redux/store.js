import {authreducer} from './reducer/AuthReducer'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk";

const store = createStore(authreducer, applyMiddleware(thunk))

export default store