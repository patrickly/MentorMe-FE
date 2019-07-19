import axios from 'axios'
import jwt from 'jsonwebtoken'

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const FETCH_QUEST_START = "FETCH_DATA_START"
export const FETCH_QUEST_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_QUEST_FAILURE = "FETCH_DATA_FAILURE"

export const login = creds => dispatch => {
    console.log("Login Creds: ", creds)
    dispatch({ type: LOGIN_START })
    return axios
        .post('https://mentor-me-application.herokuapp.com/api/login', creds)
        .then(res => {
            const token = res.data.token
            localStorage.setItem('token', token)
            const decodedToken = jwt.decode(token)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                data: res.data,
                user: decodedToken,
                }
            })
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err })
          })
}

export const register = newUser => dispatch => {
    console.log("New User: ", newUser)
    dispatch({ type: REGISTER_START })
    return axios
        .post('https://mentor-me-application.herokuapp.com/api/login', newUser)
        .then(res => {
            // const token = res.data.token
            // localStorage.setItem('token', token)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            })
        })
        .catch(err => {
            dispatch({ type: REGISTER_FAILURE, payload: err })
          })
}

export const getQuest = () => dispatch => {
    dispatch({ type: FETCH_QUEST_START })
    axios
        .get('https://mentor-me-application.herokuapp.com/api/questions', {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            dispatch({ type: FETCH_QUEST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            if (err.response.status === 403) {
            localStorage.removeItem('token')
            }
            dispatch({ type: FETCH_QUEST_FAILURE, payload: err.response })
        })
}