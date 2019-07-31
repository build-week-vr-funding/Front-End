//ACTIONS
import axios from 'axios';

export const REGISTER_USER_START = 'REGISTER_USER_START'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const GET_USERS_START = 'GET_USERS_START'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'

export function registerUser( username, password, name, about ) {
    return (dispatch) => {
        dispatch({ type: REGISTER_USER_START })

        const newUser = { username, password, name, about }
        return axios
            .post('https://vrfp.herokuapp.com/auth/register',  newUser )
                .then((res) => {
                    dispatch({ type: REGISTER_USER_SUCCESS})
                })
                .catch((err) => {
                    dispatch({ type: REGISTER_USER_FAILURE })
                    console.log(err)
                })
    }
}

export function getUsers() {
    return (dispatch) => {
        dispatch({ type: GET_USERS_START })

        const headers = {
            Type: 'application/JSON',
            Authorization: localStorage.getItem('token'),
        }

        axios
            .get('https://vrfp.herokuapp.com/users/', { headers })
                .then((res) => {
                    dispatch({ type: GET_USERS_SUCCESS, payload: res.data })
                })
                .catch((err) => {
                    dispatch({ type: GET_USERS_FAILURE, payload: err.response.data })
                })
    }
}

export function login( username, password ){
    return (dispatch) => {
        dispatch({ type: LOGIN_START })
        return axios
            .post('https://vrfp.herokuapp.com/auth/login', { username, password })
                .then(res => {
                    console.log(res)
                    localStorage.setItem('token', res.data.token)
                    dispatch({ type: LOGIN_SUCCESS })
                })
                .catch((err) => {
                    const payload = err.response ? err.response.data : err
                    dispatch({ type: LOGIN_FAILURE, payload })
                })
    }
}