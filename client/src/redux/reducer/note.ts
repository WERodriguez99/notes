
import NoteModel from '../../models/note';
import ActionsType from '../actions/actions-types';
import { Action } from '../actions/actions-interface/note';

interface Note {
    loading: boolean,
    details: NoteModel | null,
    message: string | null,
    err: string | null,
};

const initialState = {
    loading: false,
    details: null,
    message: null,
    err: null,
}

const note = ( state: Note = initialState, action: Action ): Note => {

    switch( action.type ){
        case ActionsType.NOTE_REQUEST:
            return { ...state, loading: true, details: null, message: null }
        case ActionsType.GET_NOTE_SUCCESS:
            return { ...state, details: action.payload, loading: false, err: null }
        case ActionsType.CLEAN_NOTE: 
            return { ...state, details: null }
        case ActionsType.POST_NEW_NOTE_SUCCESS:
            return { ...state, message: action.payload, loading: false, err: null }
        case ActionsType.PUT_NOTE_SUCCESS:
            return { ...state, details: null, message: action.payload, loading: false, err: null }
        case ActionsType.DELETE_NOTE_SUCCESS:
            return { ...state, details: null, message: action.payload, loading: false, err: null }
        case ActionsType.NOTE_FAIL:
            return { ...state, details: null, err: action.payload, loading: false }
        default:
            return state
    };
};

export default note;