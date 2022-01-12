
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Note from './card';
import { rootStore } from '../../../../redux/store';
import NoteActions from '../../../../redux/actions/actions-creators/noteActions';

import Ufilter from '../../../../utils/filter';
import './index.scss';

const Notes: React.FC<{skip: number, page_size: number}> = ({ skip, page_size }): JSX.Element => {

    const user = useSelector((state: rootStore) => state.home.data)
    const dispatch = useDispatch();
    const get_details = (id: string) => {
        dispatch(NoteActions.loading())
        dispatch(NoteActions.DetailsNote(id))
    }
    const [ filter, setFilter ] = useState('oldest')
     
    const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setFilter(value);
      };

    return (
        <>
            <div className='container_filter'>

                <select className='filter' name='select' onChange={ e  => selectChange(e) }>
                    <option value='AtoZ'> A to Z </option>
                    <option value='ZtoA'> Z to A </option>
                    <option value='recent'> recent </option>
                    <option value='oldest'> oldest </option>
                </select>
            </div>

            {
                user?.userNotes && user?.userNotes.length > 0 ?
                    <>
                        {Ufilter(user.userNotes, filter).slice(skip, page_size).map(note =>
                            <div className='container_notes' key={note._id} onClick={() => get_details(note._id)}>
                                <Note
                                    key={note._id}
                                    id={note._id}
                                    title={note.title}
                                    note={note.note}
                                />
                            </div>

                        )} 

                    </> : <h2 className='not_note'> NOT NOTE </h2>
            }
        </>
    )
};

export default Notes;