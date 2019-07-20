import axios from 'axios'
import jwt from 'jsonwebtoken'

// export const GET_USER_START = "LOGIN_START"
// export const GET_USER_SUCCESS = "LOGIN_SUCCESS"
// export const GET_USER_FAILURE = "LOGIN_FAILURE"

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const FETCH_QUEST_START = "FETCH_DATA_START"
export const FETCH_QUEST_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_QUEST_FAILURE = "FETCH_DATA_FAILURE"

export const ADD_QUEST_START = "ADD_DATA_START"
export const ADD_QUEST_SUCCESS = "ADD_DATA_SUCCESS"
export const ADD_QUEST_FAILURE = "ADD_DATA_FAILURE"

export const DELETE_QUEST_START = "DELETE_DATA_START"
export const DELETE_QUEST_SUCCESS = "DELETE_DATA_SUCCESS"
export const DELETE_QUEST_FAILURE = "DELETE_DATA_FAILURE"

export const UPDATE_QUEST_START = "UPDATE_DATA_START"
export const UPDATE_QUEST_SUCCESS = "UPDATE_DATA_SUCCESS"
export const UPDATE_QUEST_FAILURE = "UPDATE_DATA_FAILURE"

// export const getUsers = userId => dispatch => {
//     console.log("User ID: ", userId)
//     dispatch({ type: GET_USER_START })
//     const token = localStorage.getItem("token")
//     let config = { headers: { authentication: token } }
//     return axios
//         .get(`https://mentor-me-application.herokuapp.com/api/users/${userId}`, config)
//         .then(res => {
//             dispatch({
//                 type: GET_USER_SUCCESS,
//                 payload: res.data,
//             })
//         })
//         .catch(err => {
//             dispatch({ type: GET_USER_FAILURE, payload: err })
//           })
// }

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
        .get('https://mentor-me-application.herokuapp.com/api/questions')
        .then(res => {
            dispatch({ type: FETCH_QUEST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            if (err.response.status === 403) {
            localStorage.removeItem('token')
            }
            dispatch({ type: FETCH_QUEST_FAILURE, payload: err })
        })
}

export const addQuest = () => dispatch => {
    dispatch({ type: ADD_QUEST_START })
    axios
        .post('https://mentor-me-application.herokuapp.com/api/questions')
        .then(res => {
            dispatch({ type: ADD_QUEST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ADD_QUEST_FAILURE, payload: err})
        })
}

export const deleteQuest = quest => dispatch => {
    dispatch({ type: DELETE_QUEST_START })
    axios
        .delete(`https://mentor-me-application.herokuapp.com/api/questions/${quest.id}`)
        .then(res => {
            dispatch({ type: DELETE_QUEST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: DELETE_QUEST_FAILURE, payload: err})
        })
}

export const updateQuest = quest => dispatch => {
    dispatch({ type: DELETE_QUEST_START })
    axios
        .put(`https://mentor-me-application.herokuapp.com/api/questions/${quest.id}`)
        .then(res => {
            dispatch({ type: DELETE_QUEST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: DELETE_QUEST_FAILURE, payload: err})
        })
}