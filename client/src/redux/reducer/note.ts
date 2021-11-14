
import NoteModel from '../../models/note';
import ActionsType from '../actions/actions-types';
import { Action } from '../actions/actions-interface/note';

interface Note {
    loading: boolean,
    details: NoteModel | null,
    new: string | null,
    modify:  string | null,
    delete: string | null,
    err: string | null,
};

const initialState = {
    loading: false,
    details: null,
    new: null,
    modify: null,
    delete: null,
    err: null,
}

const note = ( state: Note = initialState, action: Action ): Note => {

    switch( action.type ){
        case ActionsType.NOTE_REQUEST:
            return { ...state, loading: true }
        case ActionsType.GET_NOTE_SUCCESS:
            return { ...state, details: action.payload }
        case ActionsType.POST_NEW_NOTE_SUCCESS:
            return { ...state, new: action.payload }
        case ActionsType.PUT_NOTE_SUCCESS:
            return { ...state, modify: action.payload }
        case ActionsType.DELETE_NOTE_SUCCESS:
            return { ...state, delete: action.payload }
        case ActionsType.NOTE_FAIL:
            return { ...state, err: action.payload }
        default:
            return state
    };
};

export default note;