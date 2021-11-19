
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import { rootStore } from '../../redux/store';

import Loader from '../loader';
import MyNotes from './nav';
import NewNote from './notes/newNote';
import Notes from './notes/cards';
import DetailsNote from './notes/noteDetails/details';

import { Action as Action_home } from '../../redux/actions/actions-interface/home';
import { Action as Action_note } from '../../redux/actions/actions-interface/note';

import HomeAction from '../../redux/actions/actions-creators/homeAction';
import utils from '../../utils';

import './index.scss';

const Home: React.FC = (): JSX.Element => {

    const store = useSelector((state: rootStore) => state.note.details);
    const loading = useSelector((state: rootStore) => state.home.loading)
    const dispatch = useDispatch();
    const element = utils.getElement("emergent")

    useEffect(() => {
        dispatch(HomeAction());
    }, [dispatch])

    return (
        <>
            <MyNotes />
            {
                !loading ?
                    <div>
                        <div className='container_form'>
                            <NewNote />
                        </div>
                        <div className='container_note'>
                            <Notes />
                        </div>

                        {
                            store &&
                            ReactDOM.createPortal(
                                <DetailsNote
                                    id={store._id}
                                    title={store.title}
                                    author={store.author}
                                    note={store.note}
                                    createdAt={store.createdAt}
                                    updatedAt={store.updatedAt}
                                />, element)
                            }
                    </div> : ReactDOM.createPortal(<Loader />, element)
            }
        </>

    )
};

export default Home;