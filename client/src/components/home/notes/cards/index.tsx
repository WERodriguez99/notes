
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Note from './card';
import { rootStore } from '../../../../redux/store';
import NoteActions from '../../../../redux/actions/actions-creators/noteActions';

const Notes: React.FC = (): JSX.Element => {
    
    const user = useSelector(( state: rootStore ) => state.home.data)
    const dispatch = useDispatch();

    return (
        <>
            { 
                user?.userNotes && user?.userNotes.length > 0 ? user.userNotes.map( note => 
                <div key={note._id} onClick={()=> dispatch(NoteActions.DetailsNote(note._id))}>
                <Note 
                    key={note._id}
                    id={note._id}
                    title={note.title}
                    note={note.note}
                    />
                </div> 
                ) : <h2> Not notes </h2>
            }
        </>
    )
};

export default Notes;