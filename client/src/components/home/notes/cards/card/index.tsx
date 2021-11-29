
import React from 'react';

import utils from '../../../../../utils';
import './index.scss';

interface INote {
    id?: string,
    title?: string,
    note?: string,
}

const Note: React.FC<INote> = ({ id, title, note }): JSX.Element => {
    const a = utils.descriptionLength(note, 50);
    const b = utils.descriptionLength(title, 15);
    return (
        <div className='note' key={id}>
            <h2>{b()}</h2>
            <p>{a()}</p>
        </div>
    )
};

export default Note