
import axios from 'axios';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST', USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';

export const login = ({ mail, pass }) => async (dispatch) => {
    dispatch({
        type: USER_LOGIN_REQUEST,
        payload: {
            mail, 
            pass,
        }
    }); 

    try {
        const { data } = axios.post('/auth/login', {
            mail,
            pass
        })

        !data.user.activated ? alert('Place ferify your account') : window.location.href = '/mynotes' && localStorage.setItem('token', data.token)
    }
    catch(err){
        alert('Invalid Mail or Password')
    }
}