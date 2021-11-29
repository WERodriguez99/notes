
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Note from './card';
import { rootStore } from '../../../../redux/store';
import NoteActions from '../../../../redux/actions/actions-creators/noteActions';
import Pagination from '../../pagination';

import utils from '../../../../utils';
import Ufilter from '../../../../utils/filter';
import './index.scss';

const Notes: React.FC = (): JSX.Element => {

    const user = useSelector((state: rootStore) => state.home.data)
    const dispatch = useDispatch();
    const get_details = (id: string) => {
        dispatch(NoteActions.loading())
        dispatch(NoteActions.DetailsNote(id))
    }
    const [state, setState] = useState(0)
    const [ filter, setFilter ] = useState('oldest')
    
    const { skip, page_size, max } = utils.paginate(state, user?.userNotes ? user.userNotes.length : 0)
     
    const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setFilter(value);
      };

    return (
        <>
    
            <select className='filter' name='select' onChange={ e  => selectChange(e) }>
                <option value='AtoZ'> A to Z </option>
                <option value='ZtoA'> Z to A </option>
                <option value='recent'> recent </option>
                <option value='oldest'> oldest </option>
            </select>

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

                            <Pagination setState={setState} page={state} max={max}/>

                    </> : <h2 className='not_note'> NOT NOTE </h2>
            }
        </>
    )
};

export default Notes;