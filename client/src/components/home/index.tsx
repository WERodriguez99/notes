
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
 
import { rootStore } from '../../redux/store';
import NewNote from './notes/newNote';
import Notes from './notes/cards';
import DetailsNote from './notes/noteDetails/details';

import HomeAction from '../../redux/actions/actions-creators/homeAction'; 

const Home: React.FC = (): JSX.Element => {
    
    const store = useSelector(( state: rootStore ) => state.note.details);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(HomeAction())
    }, [])

    return (
        <div>
            <NewNote/>
            <Notes/>

            {store && 
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
        </div>
    )
};

export default Home;