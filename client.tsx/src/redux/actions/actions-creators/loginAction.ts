

import axios from 'axios';
import { Dispatch } from 'redux';

import { Action } from '../actions-interface/login';
import LoginModel from '../../../models/login';
import ActionType from '../actions-types';

const Login = (info: { mail: string, pass: string }) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({
            type: ActionType.LOGIN_REQUEST
        })

        const { data } = await axios.post<LoginModel>('/user/login', info);

        dispatch({
            type: ActionType.LOGIN_SUCCESS,
            payload: data,
        });

        window.location.href = "http://localhost:3000/notes";
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.mail);
    }

    catch(err: any){
        dispatch({
            type: ActionType.LOGIN_FAIL,
            payload: err.msj
        })
    }
};

export default Login