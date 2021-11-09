export const SET_MAIN = 'SET_MAIN'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'


const initialState = {
    main: {},
    error: '',
    isLoading: true
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAIN:
            return {...state, main: action.payload,isLoading: false}
        case SET_LOADING:
            return {...state, isLoading: action.payload}
        case SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        default:
            return state;
    }
}