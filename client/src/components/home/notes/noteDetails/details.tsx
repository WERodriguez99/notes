
import React from 'react';

interface INoteDetails {
    id: string,
    author: string,
    title: string,
    note: string,
    createdAt: string,
    updatedAt: string
}

const Details: React.FC<INoteDetails> = ({ id, author, title, note, createdAt, updatedAt }): JSX.Element => {
    
    //const disaptch = useDispatch();
    
    return (
        <table>
            <tr>
                <td> {title} </td>
            </tr>
            <tr>
                <td> {note} </td>
            </tr>
        </table>
    )
};

export default Details