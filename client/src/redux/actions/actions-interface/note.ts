
import NoteModel from '../../../models/note';
import ActionType from '../actions-types';

interface NoteRequestAction {
    type: ActionType.NOTE_REQUEST
};

interface GetNoteSuccessAction {
    type: ActionType.GET_NOTE_SUCCESS,
    payload: NoteModel,
};

interface CleanNoteAction {
    type: ActionType.CLEAN_NOTE,
}

interface PostNoteSuccessAction {
    type: ActionType.POST_NEW_NOTE_SUCCESS,
    payload: string,
};

interface PutNoteSuccessAction {
    type: ActionType.PUT_NOTE_SUCCESS,
    payload: string,
};

interface DeleteNoteSuccessAction {
    type: ActionType.DELETE_NOTE_SUCCESS,
    payload: string
};

interface NoteFail {
    type: ActionType.NOTE_FAIL,
    payload: string
};

export type Action = 
    | NoteRequestAction
    | GetNoteSuccessAction
    | CleanNoteAction
    | PostNoteSuccessAction
    | PutNoteSuccessAction
    | DeleteNoteSuccessAction
    | NoteFail