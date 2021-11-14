
import LoginModel from '../../models/login';
import ActionType from '../actions/actions-types';
import { Action } from '../actions/actions-interface/login' 
 
interface Login {
    loading: boolean,
    err: string | null,
    data: LoginModel | null
}

const inicialState = {
    loading: false,
    err: null,
    data: null,
}

const login = (state: Login = inicialState, action: Action): Login => {

    switch(action.type) {
        case ActionType.LOGIN_REQUEST:
            return { ...state, loading: true }
        case ActionType.LOGIN_SUCCESS:
            return { ...state, loading: false, data: action.payload }
        case ActionType.LOGIN_FAIL:
            return { ...state, loading: false, err: action.payload }
        default:
            return state
    }
};

export default login;