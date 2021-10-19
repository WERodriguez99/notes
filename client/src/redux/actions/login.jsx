
import axios from 'axios';

export const USER_LOGIN_STATE = 'USER_LOGIN_STATE';

export const login = (store) => async (dispatch) => {
    try {
        const { data } = await axios.post('/user/login', store)
        /* data.activ ? alert('Place ferify your account') : ( */
        dispatch({ type: USER_LOGIN_STATE, payload: data.auth });
        window.location.href = "http://localhost:3000/notes";
        localStorage.setItem('token', data.token);
    }
    catch(err){
        console.log(err)
        alert('Invalid Mail or Password')
    }
}