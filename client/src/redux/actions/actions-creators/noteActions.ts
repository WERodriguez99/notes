
import axios from 'axios';
import { Dispatch } from 'redux';

import { Action } from '../actions-interface/note';
import NoteModel from '../../../models/note';
import MessageModel from '../../../models/mjs';
import ActionType from '../actions-types';



const Note = {
    
    loading: () => async ( dispatch: Dispatch<Action> ) => dispatch({
        type: ActionType.NOTE_REQUEST
    }),

    DetailsNote: ( id: string ) => async ( dispatch: Dispatch<Action> ) => {
        try {
            const { data } = await axios.get<NoteModel>(`user/note/${id}`)
    
            return dispatch({
                type: ActionType.GET_NOTE_SUCCESS,
                payload: data
            });
        }
    
        catch(err: any){
            dispatch({
                type: ActionType.NOTE_FAIL,
                payload: err.response.data.msj
            });
        }
    },

    NewNote: ( info: { title: string, note: string, author: string }) => async ( dispatch: Dispatch<Action> ) => {
        try {
            const { data } = await axios.post<MessageModel>(`/user/note`, info);

            return dispatch({
                type: ActionType.POST_NEW_NOTE_SUCCESS,
                payload: data.msj
            });
        }
        catch(err: any){
            dispatch({
                type: ActionType.NOTE_FAIL,
                payload: err.response.data.msj
            });
        }
    },

    ModifyNote: ( id: string ) => async ( dispatch: Dispatch<Action> ) => {
        try {
            const { data } = await axios.put<MessageModel>(`/user/note/${id}`);

            return dispatch({
                type: ActionType.PUT_NOTE_SUCCESS,
                payload: data.msj,
            });
        }
        catch(err: any){
            dispatch({
                type: ActionType.NOTE_FAIL,
                payload: err.response.data.msj
            });
        }
    },

    DeleteNote: ( id: string ) => async ( dispatch: Dispatch<Action> ) => {
        try {
            const { data } = await axios.delete<MessageModel>(`/user/note/${id}`);

            return dispatch({
                type: ActionType.DELETE_NOTE_SUCCESS,
                payload: data.msj,
            });
        }
        catch(err: any){
            dispatch({
                type: ActionType.NOTE_FAIL,
                payload: err.response.data.msj
            });
        }
    },
}

export default Note

