
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import { rootStore } from '../../redux/store';

import Loader from '../loader';
import MyNotes from './nav';
import NewNote from './notes/newNote';
import Notes from './notes/cards';
import DetailsNote from './notes/noteDetails/details';


import HomeAction from '../../redux/actions/actions-creators/homeAction';
import NoteActions from '../../redux/actions/actions-creators/noteActions';
import utils from '../../utils';

import './index.scss';

const Home: React.FC = (): JSX.Element => {

    const store = useSelector((state: rootStore) => state.note.details);
    const loading = useSelector((state: rootStore) => state.home.loading)
    const dispatch = useDispatch();
    const element = utils.getElement("emergent")
    const [ refresh, setRefresh ] = useState(true)

    useEffect(() => {
        dispatch(HomeAction('null'));

    }, [])

    useEffect(() => {
        dispatch(NoteActions.Notes('notes'))
    }, [refresh])

    return (
        <>
            <MyNotes />
            {
                !loading ?
                    <div>
                        <i className="far fa-arrow-alt-circle-up"></i>
                        <div className='container_form'>
                            <NewNote />
                        </div>
                        <div className='container_note'>
                            <Notes />
                        </div>

                        {
                            store && <div className='back_claen' onClick={() => dispatch(NoteActions.CleanNote())}></div> &&
                            ReactDOM.createPortal(
                                <DetailsNote
                                    id={store._id}
                                    title={store.title}
                                    author={store.author}
                                    note={store.note}
                                    createdAt={store.createdAt}
                                    updatedAt={store.updatedAt}
                                    refresh={refresh}
                                    setRefresh={setRefresh}
                                />, element)
                            }
                    </div> : ReactDOM.createPortal(<Loader />, element)
            }
        </>

    )
};

export default Home;