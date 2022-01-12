
import React, { useState, useEffect, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

import noteActions from '../../../../redux/actions/actions-creators/noteActions';
import './details.scss';

import Swal from 'sweetalert2';

interface INoteDetails {
    id: string,
    author: string,
    title: string,
    note: string,
    createdAt: string,
    updatedAt: string,
    refresh: boolean,
    setRefresh: Dispatch<SetStateAction<boolean>>,
}


const Details: React.FC<INoteDetails> = ({ id, author, title, note, createdAt, updatedAt, refresh, setRefresh }): JSX.Element => {

    const dispatch = useDispatch();
    const [state, setState] = useState({
        title: title,
        note: note,
    });

    const [modify, setModify] = useState({
        state: false,
        text: 'modify',
        styleTitle: 'tr_title',
        styleNote: 'tr_note'
    });

    const handelChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const id = e.target.id;
        const value = e.target.value
        setState({ ...state, [id]: value })
    };

    const handelClick = () => {
        setModify({ state: !modify.state, text: !modify.state ? 'cancel' : 'modify', styleTitle: !modify.state ? 'tr_title_modify' : 'tr_title', styleNote: !modify.state ? 'tr_note_modify' : 'tr_note' })
    };

    const delet = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            iconColor: '#bd937b',
            showCancelButton: true,
            background: '#CDCDC0',
            confirmButtonColor: '#9A9EAB',
            cancelButtonColor: '#9A9EAB',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                dispatch(noteActions.DeleteNote(id))
                setTimeout(() => setRefresh(!refresh), 2000)
            }
        })
    };

    const modifyNote = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            iconColor: '#bd937b',
            showCancelButton: true,
            background: '#CDCDC0',
            confirmButtonColor: '#9A9EAB',
            cancelButtonColor: '#9A9EAB',
            confirmButtonText: 'Yes, modify!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                dispatch(noteActions.ModifyNote(id, state))
                setTimeout(() => setRefresh(!refresh), 2000)

            }
        })
    };

    return (
        <div className='container_DNote'>
            <div className='back_clean' onClick={() => dispatch(noteActions.CleanNote())}>

            </div>
            <table className='details'>

                <thead>
                    <tr className='tr_btn'>
                        <td>
                            <button onClick={() => dispatch(noteActions.CleanNote())}></button>
                        </td>
                    </tr>

                    <tr className='tr_title'>
                        <td> {modify.state ? <input type="text" id='title' value={state.title} onChange={e => handelChange(e)} placeholder="Title" /> : <h2>{title}</h2>} </td>
                    </tr>
                </thead>

                <tbody>


                    <tr className={modify.styleNote}>
                        <td> <textarea disabled={!modify.state} id="note" cols={30} rows={10} value={state.note} onChange={e => handelChange(e)} placeholder="Note"></textarea> </td>
                    </tr>
                    <tr className='tr_btns'>
                        {modify.state ?
                            <td>
                                <button onClick={() => modifyNote()} > send </button>
                            </td>
                            :
                            <td>
                                <button onClick={() => delet()}> delete </button>
                            </td>
                        }
                        <td>
                            <button id='modify' onClick={() => handelClick()}>{modify.text}</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
};

export default Details