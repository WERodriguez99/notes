import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import NewNote from './note';

import { getDataUser } from '../../redux/actions/home';

export default function Home () {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataUser())
    }, [dispatch])
    return (
        <div>
            <NewNote/>
        </div>
    )
    
}