
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import noteActions from '../../../../redux/actions/actions-creators/noteActions';
import './details.scss';

interface INoteDetails {
    id: string,
    author: string,
    title: string,
    note: string,
    createdAt: string,
    updatedAt: string
}

const Details: React.FC<INoteDetails> = ({ id, author, title, note, createdAt, updatedAt }): JSX.Element => {
    
    const dispatch = useDispatch();
    const [ state, setState ] = useState({
        title: title,
        note: note,
    })

    const [modify, setModify] = useState({
        state: false,
        text: 'modify'
    })

    const handelChange = ( e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement> ) => {
        const id = e.target.id;
        const value = e.target.value
        setState({...state, [id]: value})
    }

    const handelClick = () => {
        setModify({ state: !modify.state, text: !modify.state?'not modyfi' : 'modify' })
    };
 
    return (
        <div className='container_DNote' /* onClick={() => dispatch(noteActions.CleanNote())} */>
           <table className='details'>
               <tr className='tr_btn'>
                   <td>
                        <button onClick={ () => dispatch(noteActions.CleanNote()) }></button>
                   </td>
               </tr>
                <tr className='tr_title'>
                    <td> { modify.state ? <input type="text" id='title' value={state.title} onChange={e => handelChange(e)} /> : <h2>{title}</h2>} </td>
                </tr>
                <tr className='tr_note'>
                    <td> <textarea disabled={!modify.state} id="note" cols={30} rows={10} value={state.note} onChange={e => handelChange(e)}></textarea> </td>
                </tr>
                <tr className='tr_btns'>
                    <td>
                        <button onClick={ () => dispatch(noteActions.DeleteNote(id)) } > DELETE </button>
                    </td>
                    <td>
                        <button onClick={()=> handelClick()}>{modify.text}</button>
                    </td>
                        {modify.state && 
                        <td>
                            <button onClick={()=> dispatch(noteActions.ModifyNote(id, state))} > send </button>
                        </td>
                        }
                </tr>
            </table>

        </div>
    )
};

export default Details