
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Note from './card';
import { rootStore } from '../../../../redux/store';
import NoteActions from '../../../../redux/actions/actions-creators/noteActions';

const Notes: React.FC = (): JSX.Element => {
    
    const storeDetailsNote = useSelector(( state: rootStore ) => state.note.details);
    const user = useSelector(( state: rootStore ) => state.home.data)
    const dispatch = useDispatch();

    return (
        <>
            { 
                user?.userNotes && user?.userNotes.length > 0 ? user.userNotes.map( note => 
                <div onClick={()=> dispatch(NoteActions.DetailsNote(note._id))}>
                <Note 
                    id={storeDetailsNote?._id}
                    title={storeDetailsNote?.title}
                    note={storeDetailsNote?.note}
                    />
                </div> 
                ) : <h2> Not notes </h2>
            }
        </>
    )
};

export default Notes;