
import React, { useState } from 'react';

import utils from '../../../../../utils';
import './index.scss';

interface INote {
    id?: string,
    title?: string,
    note?: string,
}

const Note: React.FC<INote> = ({ id, title, note }): JSX.Element => {

    const [ state, setState ] = useState(window.screen.width < 1000 ? 10 : 25)
    window.addEventListener('resize', (event) => setState(window.screen.width < 1000 ? 10 : 25))
    const a = utils.descriptionLength(title, 15);
    const b = utils.descriptionLength(note, state);

    return (
        <div className='note' key={id}>
            <h2>{a}</h2>
            <p>{b}</p>
        </div>
    )
};

export default Note