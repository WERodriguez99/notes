
import LoginModel from '../../models/login';
import ActionType from '../actions/actions-types';
import { Action } from '../actions/actions-interface/register_login' 
 
interface IState {
    loading: boolean,
    err: string | null,
    login: LoginModel | null,
    msj: string | null,
    activated: boolean,
}

const inicialState = {
    loading: false,
    err: null,
    login: null,
    msj: null,
    activated: false,
}

const login = (state: IState = inicialState, action: Action): IState => {

    switch(action.type) {
        case ActionType.GET_REQUEST:
            return { ...state, loading: true }
        case ActionType.LOGIN_SUCCESS:
            return { ...state, login: action.payload }
        case ActionType.REGISTER_SUCCESS: 
            return { ...state, msj: action.payload, loading: false}
        case ActionType.GET_FAIL:
            return { ...state, loading: false, err: action.payload }
        case ActionType.GET_ACTIVATED_SUCCESS:
            return { ...state, msj: action.payload.msj, activated: action.payload.state, loading: false }
        case ActionType.GET_ACTIVATED_FAIL: 
            return { ...state, err: action.payload.msj, activated: false, loading: false }
        default:
            return state
    }
};

export default login;