import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from '../actions'
import jwt from 'jsonwebtoken'

const initialState = {
    error: '',
    fetchingData: false,
    isLoggedIn: false,
    isLoggingIn: false,
    token: localStorage.getItem('token'),
    user: jwt.decode(localStorage.getItem('token')),
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                isLoggedIn: false,
                error: "",
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.data.token,
                isLoggingIn: false,
                isLoggedIn: true,
                error: "",
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
                error: "FAILED to login",
            }

        case REGISTER_START:
            return {
                ...state,
                error: "",
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                error: "",
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                error: "FAILED to login",
            }
        default:
            return state
    }
}

export default rootReducer