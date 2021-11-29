
import React, { Dispatch, SetStateAction } from 'react';
import ReactPaginate from 'react-paginate';

import './index.scss';

interface IProps {
    setState: Dispatch<SetStateAction<number>>;
    page: number;
    max: number
};

const Pagination: React.FC<IProps> = ({ setState, page, max }): JSX.Element => {

    return (
        <div className='container_pagination'>
            {
                page > 0 && <button id={'btn_left'} onClick={()=>setState(--page)}> {'<<'} </button>
            }

            <p id='page'>{page}</p>

            {
                page < max && <button id={'btn_right'} onClick={()=>setState(++page)}> {'>>'} </button>
            }

        </div>
    )

}

export default Pagination;