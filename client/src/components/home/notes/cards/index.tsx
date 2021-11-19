
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Note from './card';
import { rootStore } from '../../../../redux/store';
import NoteActions from '../../../../redux/actions/actions-creators/noteActions';

import utils from '../../../../utils';
import './index.scss';

const Notes: React.FC = (): JSX.Element => {

    const user = useSelector((state: rootStore) => state.home.data)
    const dispatch = useDispatch();
    const get_details = (id: string) => {
        dispatch(NoteActions.loading())
        dispatch(NoteActions.DetailsNote(id))
    }
    const [state, setState] = useState(0)
    const { page_size, skip }: { page_size: number, skip: number } = utils.paginate(state)
    return (
        <>
            {
                user?.userNotes && user?.userNotes.length > 0 ?
                    <>
                        {user.userNotes/* .splice(skip, page_size) */.map(note =>
                            <div className='container_notes' key={note._id} onClick={() => get_details(note._id)}>
                                <Note
                                    key={note._id}
                                    id={note._id}
                                    title={note.title}
                                    note={note.note}
                                />
                            </div>

                        )} <div>
                            {/* <button onClick={() => setState(state - 1)}>{'<<'}</button>
                            <button onClick={() => setState(state + 1)}>{'>>'}</button> */}
                        </div>
                    </> : <h2> Not notes </h2>
            }
        </>
    )
};

export default Notes;