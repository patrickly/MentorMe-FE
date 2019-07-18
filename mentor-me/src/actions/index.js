import axios from 'axios'
import jwt from 'jsonwebtoken'

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const FETCH_DATA_START = "FETCH_DATA_START"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"

export const login = creds => dispatch => {
    console.log(creds)
    dispatch({ type: LOGIN_START })
    return axios
        .post('https://mentor-me-application.herokuapp.com/api/login', creds)
        .then(res => {
            const token = res.data.token
            localStorage.setItem('token', token)
            const decodedToken = jwt.decode(token)
            console.log(decodedToken)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                data: res.data,
                user: decodedToken,
                }
            })
        })
        .catch(err => {
            console.log(err)
            if (err.status === 403) {
                localStorage.removeItem('token')
            }
            dispatch({ type: LOGIN_FAILURE, payload: err })
          })
}

export const getUser = () => dispatch => {
    dispatch({ type: FETCH_DATA_START })
    axios
        .get('https://mentor-me-application.herokuapp.com/api/users', {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => {
            if (err.response.status === 403) {
            localStorage.removeItem('token')
            }
            dispatch({ type: FETCH_DATA_FAILURE, payload: err.response })
        })
}