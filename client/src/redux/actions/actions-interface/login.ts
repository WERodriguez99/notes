
import LoginModel from '../../../models/login';
import ActionType from '../actions-types';

interface LoginRequestAction {
    type: ActionType.LOGIN_REQUEST
};

interface LoginSuccessAction {
    type: ActionType.LOGIN_SUCCESS,
    payload: LoginModel,
};

interface LoginFailAction {
    type: ActionType.LOGIN_FAIL
    payload: string
};



export type Action = 
    | LoginRequestAction
    | LoginSuccessAction
    | LoginFailAction;

