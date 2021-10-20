import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import utils from '../../../utils';

import { newNote } from '../../../redux/actions/newNote';

const NewNote = () => {
    
    const dispatch = useDispatch()
    const [ state, setState ] = useState({
        title: "",
        note: "",
        author: "",
        state: false,
    });

    const send = () => {
        dispatch(newNote(state))
    }

    return (
        <form onSubmit={e => utils.handleSubmit(e)}>
            
            <label> Title </label>
            <input type="text" id='title' value={state.title} onChange={(e) => utils.handleChange(e, state, setState)} placeholder='Introduzca un titulo'/>
            
            <label> Description </label>
            <input type="text" id='note' value={state.note} onChange={(e) => utils.handleChange(e, state, setState)} placeholder='You note'/>

            <button type='submit' onClick={()=>send()}> send </button>
        </form>
    )
}

export default NewNote