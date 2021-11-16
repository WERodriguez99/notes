
import LoginModel from '../../../models/login';
import msjModel from '../../../models/mjs';
import ActionType from '../actions-types';

interface RequestAction {
    type: ActionType.GET_REQUEST
};

interface LoginSuccessAction {
    type: ActionType.LOGIN_SUCCESS,
    payload: LoginModel,
};

interface RegisterSuccessAction {
    type: ActionType.REGISTER_SUCCESS,
    payload: msjModel,
}

interface FailAction {
    type: ActionType.GET_FAIL
    payload: string
};



export type Action = 
    | RequestAction
    | LoginSuccessAction
    | RegisterSuccessAction
    | FailAction;

