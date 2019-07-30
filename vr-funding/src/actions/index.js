import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_START = 'LOGIN_START';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    axios
        .post('https://vrfp.herokuapp.com/auth/login', creds)
        .then(res => {
            console.log(res.data.user)
            localStorage.setItem('token', res.data.payload)
            dispatch({ 
                type: LOGIN_SUCCESS, 
                payload: res.data.user
            })
        })
        .catch(err => console.log(err.response))
}