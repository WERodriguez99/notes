
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import { rootStore } from '../../redux/store';

import Loader from '../loader';
import MyNotes from './nav';
import NewNote from './notes/newNote';
import Pagination from './pagination';
import Notes from './notes/cards';
import DetailsNote from './notes/noteDetails/details';


import HomeAction from '../../redux/actions/actions-creators/homeAction';
import NoteActions from '../../redux/actions/actions-creators/noteActions';
import utils from '../../utils';

import './index.scss';

const Home: React.FC = (): JSX.Element => {

    const store = useSelector((state: rootStore) => state.note.details);
    const home = useSelector((state: rootStore) => state.home)
    const dispatch = useDispatch();
    const element = utils.getElement("emergent")
    const [ refresh, setRefresh ] = useState(true)
    
    const [ state, setState ] = useState(0)
    const { skip, page_size, max } = utils.paginate(state, home?.data?.userNotes ? home.data.userNotes.length : 0)

    const [ viewNewNote, setViewNewNote ] = useState(false)
    const [ screen, setScreen ] = useState(window.screen.width)

    useEffect(() => {
        dispatch(HomeAction('null'));

    }, [])

    useEffect(() => {
        dispatch(NoteActions.Notes('notes'))
    }, [refresh])

    window.addEventListener('resize', (event) => setScreen(window.screen.width))
    

    return (
        <>
            <MyNotes />
            {
                !home.loading ?
                    <div className='home'>

                        {
                        screen < 370 ? !viewNewNote ?
                            <button className='btn_new_note' onClick={ () => setViewNewNote(true)}> New note </button>
                        :
                            
                        ReactDOM.createPortal( <div className='container_form_emerg'> <NewNote view={viewNewNote} setViewNewNote={setViewNewNote}/> </div>, element)   
                            
                        :
                            <div className='container_form'>
                                <NewNote view={undefined} setViewNewNote={undefined}/>
                            </div>
                        }
                        <div className='container_note'>
                            <Notes skip={skip} page_size={page_size} />
                        </div>
                        <div className='container_pagination'>
                            <Pagination setState={setState} page={state} max={max}/>
                        </div>

                        {
                            store && ReactDOM.createPortal(
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