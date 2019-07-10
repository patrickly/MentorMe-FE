const initialState = {
    mentors: [],
    menties: [],
    error: '',
    fetchingData: false,
    isLoggedIn: false,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default rootReducer