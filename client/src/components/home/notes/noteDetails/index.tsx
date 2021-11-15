
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Details from './details'
import { rootStore } from '../../../../redux/store';

const DetailsNote = () => {
    const store = useSelector(( state: rootStore ) => state.note.details );

    return (
        <>
        {store && <Details
            id={store._id}
            title={store.title}
            author={store.author}
            note={store.note}
            createdAt={store.createdAt}
            updatedAt={store.updatedAt}
        />}
        </>
    )
}

export default DetailsNote