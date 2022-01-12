
import React, { Dispatch, SetStateAction, useState } from 'react';



import Arrow from '../../../utils/arrows';

import './index.scss';

interface IProps {
    setState: Dispatch<SetStateAction<number>>;
    page: number;
    max: number
};

const Pagination: React.FC<IProps> = ({ setState, page, max }): JSX.Element => {
    const [ view, setView ] = useState({
        arrowL: 'btn_left_des',
        arrowR: 'btn_right_act',
    })
    return (
        <>
            <button id={view.arrowL} onClick={()=>{setState(--page); setView({arrowL: page > 0 ? 'btn_left_act' : 'btn_left_des', arrowR: page < max  ? 'btn_right_act' : 'btn_right_des' })}}> <Arrow direct={-90}/> </button>
            

            <p id='page'>{page}</p>

            
            <button id={view.arrowR} onClick={()=>{ setState(++page); setView({arrowL: page > 0 ? 'btn_left_act' : 'btn_left_des', arrowR: page < max  ? 'btn_right_act' : 'btn_right_des' }) }}> <Arrow direct={90}/> </button>
            

        </>
    )

}

export default Pagination;