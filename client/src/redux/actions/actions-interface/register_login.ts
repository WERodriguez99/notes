
import LoginModel from '../../../models/login';
import msjModel from '../../../models/mjs';
import ActionType from '../actions-types';
import activatedModel from '../../../models/activated';

interface RequestAction {
    type: ActionType.GET_REQUEST
};

interface LoginSuccessAction {
    type: ActionType.LOGIN_SUCCESS,
    payload: LoginModel,
};

interface RegisterSuccessAction {
    type: ActionType.REGISTER_SUCCESS,
    payload: string,
};

interface FailAction {
    type: ActionType.GET_FAIL
    payload: string
};

interface RequestActivatedAction {
    type: ActionType.GET_ACTIVATED
};

interface ActivatedSuccess {
    type: ActionType.GET_ACTIVATED_SUCCESS
    payload: activatedModel
};

interface ActivatedFail {
    type: ActionType.GET_ACTIVATED_FAIL
    payload: msjModel
};



export type Action = 
    | RequestActivatedAction
    | ActivatedSuccess
    | ActivatedFail
    | RequestAction
    | LoginSuccessAction
    | RegisterSuccessAction
    | FailAction;

