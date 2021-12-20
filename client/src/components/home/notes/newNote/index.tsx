
import React, { ChangeEvent, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { rootStore } from '../../../../redux/store';
import NoteActions from '../../../../redux/actions/actions-creators/noteActions';
import utils from '../../../../utils'

import './index.scss';
import alerts from '../../../../utils/alerts';

const NewNote: React.FC = (): JSX.Element => {

    const store = useSelector((state: rootStore) => state.home);
    const dispatch = useDispatch();

    const [state, setState] = useState({
        title: "",
        note: "",
    });
    const [ Send, setSend ] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const id = e.target.id || e.target.name;
        const value = e.target.value;

        setState({ ...state, [id]: value })
    };

    const send = () => {

        !state.title ? alerts.alertError('title missing') 
        :
        !state.note ?  alerts.alertError('note missing')
        :
        ((() => { 
            dispatch(NoteActions.loading());
            dispatch(NoteActions.NewNote({ title: state.title, note: state.note, author: store.data?._id || "" }));
            setState({ title: '', note: '', });
            setSend(!Send) 
        })())
        
    };
    
    useEffect(() => {
        dispatch(NoteActions.Notes('notes'));
    }, [Send])

    return (
        <form className='containerNewNote' onSubmit={e => utils.handleSubmit(e)}>
            <input type="text" id="title" value={state.title} onChange={ e => handleChange(e)} placeholder="Title" />

            <textarea id='note' value={state.note} onChange={ e => handleChange(e)} placeholder='You note...' />

            <button type='submit' onClick={() => send()}> send </button>
        </form>
    )
};

export default NewNote