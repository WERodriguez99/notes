

import axios from 'axios';
import { Dispatch } from 'redux';

import { Action } from '../actions-interface/register_login';
import LoginModel from '../../../models/login';
import ActionType from '../actions-types';


import alerts from '../../../utils/alerts';


const login_register = {
    
    loading: () => async ( dispatch: Dispatch<Action> ) => dispatch({
        type: ActionType.GET_REQUEST
    }),
    
    Register: (info: {name: string, mail: string, pass: string}) => async ( dispatch: Dispatch<Action> ) => {
        try {
            const { data } = await axios.post('user/singup',  (info) )

            dispatch
            ({
                type: ActionType.REGISTER_SUCCESS,
                payload: data
            })
        }
        catch(err: any){
            
            dispatch({
                type: ActionType.GET_FAIL,
                payload: err.response.data.msj
            });
            
            alerts.alertError(err.response.data.msj)
            

        }
    },

    Login: (info: { mail: string, pass: string }) => async (dispatch: Dispatch<Action>) => {
        try {
            const { data } = await axios.post<LoginModel>('/user/login', info);
    
            dispatch({
                type: ActionType.LOGIN_SUCCESS,
                payload: data,
            });
    
            window.location.href = "http://localhost:3000/notes";
            localStorage.setItem('token', data.token);
        }
    
        catch(err: any){
            
            dispatch({
                type: ActionType.GET_FAIL,
                payload: err.response.data.msj
            })

            alerts.alertError(err.response.data.msj)
        }
    }, 

}

export default login_register