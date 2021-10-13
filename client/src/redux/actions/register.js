
import axios from 'axios';

const USER_CONFIRMREGISTER_REQUEST = "USER_CONFIRMREGISTER_REQUEST",
USER_CONFIRMREGISTER_SUCCESS = "USER_CONFIRMREGISTER_SUCCESS";

export const confirmRegister = token => async dispatch => {
    dispatch({
        type: USER_CONFIRMREGISTER_REQUEST, 
        payload: token,
    })

    try {
        
    }
    catch(err){
        alert('User not found')
    }
}