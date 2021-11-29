
import HomeModel from '../../../models/home';
import NoteModel from '../../../models/note';
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


interface DeleteNote {
    type: ActionType.DELETE_NOTE_HOME,
    payload: string,
}

interface PutNote {
    type: ActionType.PUT_NOTE_HOME,
    payload: string,
}

export type Action = 
    | GetHomeRequestAction
    | GetHomeSuccessAction
    | PutNote
    | DeleteNote
    | GetHomeFailAction


