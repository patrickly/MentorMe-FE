import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    FETCH_QUEST_START,
    FETCH_QUEST_SUCCESS,
    FETCH_QUEST_FAILURE,
    ADD_QUEST_START,
    ADD_QUEST_SUCCESS,
    ADD_QUEST_FAILURE,
    DELETE_QUEST_START,
    DELETE_QUEST_SUCCESS,
    DELETE_QUEST_FAILURE,
    UPDATE_QUEST_START,
    UPDATE_QUEST_SUCCESS,
    UPDATE_QUEST_FAILURE,
} from '../actions'
import jwt from 'jsonwebtoken'

const initialState = {
    error: '',
    questions: [],
    filteredQuestions: [],
    fetchingData: false,
    addingQuest: false,
    addingUser: false,
    deletingQuest: false,
    updatingQuest: false,
    isLoggedIn: false,
    isLoggingIn: false,
    token: localStorage.getItem('token'),
    user: jwt.decode(localStorage.getItem('token')),
}



const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        // Log in
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

        // Register
        case REGISTER_START:
            return {
                ...state,
                addingUser: true,
                addedUser: false,
                error: "",
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                addingUser: false,
                addedUser: true,
                user: action.payload.user,
                token: action.payload.data.token,
                error: "",
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                addedUser: false,
                error: "FAILED to register",
            }

        // Fetch question
        case FETCH_QUEST_START:
            return {
                ...state,
                fetchingData: true,
                error: "",
            }
        case FETCH_QUEST_SUCCESS:
            return {
                ...state,
                fetchingData: false,
                questions: action.payload,
                filteredQuestions: action.payload,
                error: "",
            }
        case FETCH_QUEST_FAILURE:
            return {
                ...state,
                error: action.payload.status,
            }

        // Add question
        case ADD_QUEST_START:
            return {
                ...state,
                addingQuest: true,
                error: "",
            }
        case ADD_QUEST_SUCCESS:
            return {
                ...state,
                addingQuest: false,
                questions: action.payload,
                error: "",
            }
        case ADD_QUEST_FAILURE:
            return {
                ...state,
                error: 'Add question failed',
            }

        // Delete question
        case DELETE_QUEST_START:
            return {
                ...state,
                deletingQuest: true,
                error: "",
            }
        case DELETE_QUEST_SUCCESS:
            return {
                ...state,
                deletingQuest: false,
                questions: action.payload,
                error: "",
            }
        case DELETE_QUEST_FAILURE:
            return {
                ...state,
                error: 'Delete question failed',
            }

        // Update question
        case UPDATE_QUEST_START:
            return {
                ...state,
                updatingQuest: true,
                error: "",
            }
        case UPDATE_QUEST_SUCCESS:
            return {
                ...state,
                updatingQuest: false,
                questions: action.payload,
                error: "",
            }
        case UPDATE_QUEST_FAILURE:
            return {
                ...state,
                error: 'Update question failed',
            }
        default:
            return state
    }
}

export default rootReducer