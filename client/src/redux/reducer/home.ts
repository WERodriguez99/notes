
import HomeModel from '../../models/home';
import ActionsType from '../actions/actions-types';
import { Action } from '../actions/actions-interface/home';


interface Home {
    loading: boolean,
    err: string | null,
    data: HomeModel | null,
}

const initialState = {
    loading: false,
    err: null,
    data: null,
}

const home = ( state: Home = initialState, action: Action ): Home => {

    switch( action.type ){
        case ActionsType.GET_HOME_REQUEST:
            return { ...state, loading: true }
        case ActionsType.GET_HOME_SUCCESS:
            return { ...state, loading: false, data: action.payload }
        case ActionsType.GET_HOME_FAIL: 
            return { ...state, loading: false, err: action.payload }
        default:
            return state
    };
};

export default home;