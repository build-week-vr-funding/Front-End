//REDUCER
import { 
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_START,
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
 } from '../actions'

const initialState = {
    users: [],
    projects: [],
    isLoading: false,
    errorMessage: null,
  };

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case REGISTER_USER_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case REGISTER_USER_SUCCESS: {
            console.log('register success!')
            return {
                ...state,
                isLoading: false,
            }
        }
        case REGISTER_USER_FAILURE: {
            return {
                ...state,
                isLoading: false,
            }
        }
        case GET_USERS_START: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case GET_USERS_SUCCESS: {
            const { users } = action.payload
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                users,
            }
        }
        case GET_USERS_FAILURE: {
            return {
				...state,
				isLoading: false,
				errorMessage: action.payload.message,
			}
        }
        case LOGIN_START: { 
            return {
                ...state,
                isLoading: true
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
				isLoading: false,
				errorMessage: action.payload.message,
            }
        }
        default:
            return state;
    }
}