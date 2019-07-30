import { 
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_START
 } from '../actions'

const initialState = {
    users: [],
    projects: [],
    isLoggedIn: false,
    error: ''
  };

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_START: 
        console.log('starting login')
        return {
            ...state,
            isLoggedIn: false
        }
        case LOGIN_SUCCESS:
            console.log('logged in!')
            return {
                ...state,
                isLoggedIn: true,
                error: ''
            };
        case LOGIN_FAILURE:
                console.log('log in Failed')
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
}