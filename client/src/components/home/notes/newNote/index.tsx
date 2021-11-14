
import React, { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { rootStore } from '../../../../redux/store';
import NoteActions from '../../../../redux/actions/actions-creators/noteActions';
import utils from '../../../../utils'


const NewNote: React.FC = (): JSX.Element => {

    const store = useSelector((state: rootStore) => state.home);
    const dispatch = useDispatch();

    const [state, setState] = useState({
        title: "",
        note: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id || e.target.name;
        const value = e.target.value;

        setState({ ...state, [id]: value })
    };

    const send = async () => {
        dispatch(NoteActions.loading());
        dispatch(NoteActions.NewNote({ title: state.title, note: state.note, author: store.data?._id || "" }))
    };

    return (
        <form onSubmit={e => utils.handleSubmit(e)}>
            <label> title </label>
            <input type="text" id="title" value={state.title} onChange={ e => handleChange(e)} placeholder="Title" />

            <input type="text" id='note' value={state.note} onChange={ e => handleChange(e)} placeholder='You note' />

            <button type='submit' onClick={() => send()}> send </button>
        </form>
    )
};

export default NewNote