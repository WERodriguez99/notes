
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import { rootStore } from '../../redux/store';

import Loader from '../loader';
import NewNote from './notes/newNote';
import Notes from './notes/cards';
import DetailsNote from './notes/noteDetails/details';


import HomeAction from '../../redux/actions/actions-creators/homeAction'; 
import utils from '../../utils';

const Home: React.FC = (): JSX.Element => {
    
    const store = useSelector(( state: rootStore ) => state.note.details );
    const loading = useSelector(( state: rootStore ) => state.home.loading)
    const dispatch = useDispatch();
    const element = utils.getElement("loader")

    useEffect(() => {
        dispatch(HomeAction());
    }, [])

    return (
       
        !loading ? 
            <div>
            <NewNote/>
            <Notes/>

            { store  && 
            <div> 
                <DetailsNote
                    id={store._id}
                    title={store.title}
                    author={store.author}
                    note={store.note}
                    createdAt={store.createdAt}
                    updatedAt={store.updatedAt}
                /> 
            </div>}
        </div> : ReactDOM.createPortal(<Loader/>, element)

    )
};

export default Home;