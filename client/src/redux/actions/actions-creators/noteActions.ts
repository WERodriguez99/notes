
import axios from 'axios';
import { Dispatch } from 'redux';

import { Action } from '../actions-interface/note';
import NoteModel from '../../../models/note';
import MessageModel from '../../../models/mjs';
import ActionType from '../actions-types';

import utils from '../../../utils';
import alerts from '../../../utils/alerts';


const Note = {

    loading: () => async (dispatch: Dispatch<Action>) => dispatch({
        type: ActionType.NOTE_REQUEST
    }),

    Notes: (notes: string) => async (dispatch: Dispatch<Action>) => {
        try {
            const token = localStorage.getItem("token");

            if (token) {
                const { data } = await axios.get<NoteModel[]>(`user/allnote?notes=${notes}`, {
                    headers: { "x-access-token": token },
                });

                typeof data === 'object' && dispatch({
                    type: ActionType.GET_NEW_NOTE_HOME,
                    payload: data
                })
            }
        }
        catch (err: any) {
            console.log(err)
        }
    },

    DetailsNote: (id: string) => async (dispatch: Dispatch<Action>) => {
        try {
            const { data } = await axios.get<NoteModel>(`user/note/${id}`)

            return dispatch({
                type: ActionType.GET_NOTE_SUCCESS,
                payload: data
            });
        }

        catch (err: any) {
            alerts.alertError(err.response.data.msj)
            return dispatch({
                type: ActionType.NOTE_FAIL,
                payload: err.response.data.msj
            });

        }
    },

    CleanNote: () => (dispatch: Dispatch<Action>) => {
        return dispatch({
            type: ActionType.CLEAN_NOTE,
        })
    },

    NewNote: (info: { title: string, note: string, author: string }) => async (dispatch: Dispatch<Action>) => {
        try {
            const { data } = await axios.post<MessageModel>(`/user/note`, info);

            alerts.alertSuccess(data.msj)

            return dispatch({
                type: ActionType.POST_NEW_NOTE_SUCCESS,
                payload: data.msj
            });
        }
        catch (err: any) {
            alerts.alertError(err.response.data.msj)
            return dispatch({
                type: ActionType.NOTE_FAIL,
                payload: err.response.data.msj
            });

        }
    },

    ModifyNote: (id: string, info: { title: string, note: string }) => async (dispatch: Dispatch<Action>) => {
        try {
            const { data } = await axios.put<MessageModel>(`/user/note/${id}`, info);
            alerts.alertSuccess(data.msj)
            return dispatch({
                type: ActionType.PUT_NOTE_SUCCESS,
                payload: data.msj,
            });
        }
        catch (err: any) {
            alerts.alertError(err.response.data.msj)
            return dispatch({
                type: ActionType.NOTE_FAIL,
                payload: err.response.data.msj
            });
        }
    },

    DeleteNote: (id: string) => async (dispatch: Dispatch<Action>) => {
        try {
            const { data } = await axios.delete<MessageModel>(`/user/note/${id}`);
            alerts.alertSuccess(data.msj)
            return dispatch({
                type: ActionType.DELETE_NOTE_SUCCESS,
                payload: data.msj,
            });



        }
        catch (err: any) {
            alerts.alertError(err.response.data.msj)
            return dispatch({
                type: ActionType.NOTE_FAIL,
                payload: err.response.data.msj
            });
        }
    },
}

export default Note

