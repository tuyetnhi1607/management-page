import {AuthActionType} from '../action/AuthAction'
import axios from "axios"

const authState = {
    isLogined: false,
    user: {
        userName: "",
        token: ""
    }
}

const authreducer = (state = authState, action) => {
    switch (action.type) {
        case AuthActionType.REGISTER_SUCCESS:
            const newState = {
                user: action.payload
            }
            axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${action.payload.jwttoken}`;
            localStorage.auth = JSON.stringify(newState)
            return newState;
        case AuthActionType.LOGIN_SUCCESS:
            const loginAuthState = {
                user: action.payload
            }
            axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${action.payload.jwttoken}`;
            localStorage.auth = JSON.stringify(loginAuthState)
            return loginAuthState;
        case AuthActionType.LOGOUT_SUCCESS:
            const logoutState = {
                user: action.payload
            }
            axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${action.payload.jwttoken}`;
            localStorage.auth = JSON.stringify(authState)
            return logoutState;
        default: return state

    }
}

export {authreducer}