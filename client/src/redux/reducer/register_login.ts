
import LoginModel from '../../models/login';
import msjModel from '../../models/mjs';
import ActionType from '../actions/actions-types';
import { Action } from '../actions/actions-interface/register_login' 
 
interface Login {
    loading: boolean,
    err: string | null,
    register: msjModel | null,
    login: LoginModel | null,
}

const inicialState = {
    loading: false,
    err: null,
    register: null,
    login: null,
}

const login = (state: Login = inicialState, action: Action): Login => {

    switch(action.type) {
        case ActionType.GET_REQUEST:
            return { ...state, loading: true }
        case ActionType.LOGIN_SUCCESS:
            return { ...state, login: action.payload }
        case ActionType.REGISTER_SUCCESS: 
            return { ...state, register: action.payload}
        case ActionType.GET_FAIL:
            return { ...state, loading: false, err: action.payload }
        default:
            return state
    }
};

export default login;