
import HomeModel from '../../../models/home';
import ActionType from '../actions-types';

interface GetHomeRequestAction {
    type: ActionType.GET_HOME_REQUEST,
};

interface GetHomeSuccessAction {
    type: ActionType.GET_HOME_SUCCESS,
    payload: HomeModel,
};

interface GetHomeFailAction {
    type: ActionType.GET_HOME_FAIL,
    payload: string,
};

export type Action = 
    | GetHomeRequestAction
    | GetHomeSuccessAction
    | GetHomeFailAction


