
import React from 'react';

interface INote {
    id?: string,
    title?: string,
    note?: string,
}

const Note: React.FC<INote> = ({ id, title, note }): JSX.Element => {
    return (
        <div key={id}>
            <h2>{title}</h2>
            <p>{note}</p>
        </div>
    )
};

export default Note