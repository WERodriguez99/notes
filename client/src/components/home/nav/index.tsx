
import React from 'react';
import utils from '../../../utils';

import './index.scss';

const Nav: React.FC = (): JSX.Element => {
    return (
        <div className='nav'>
            
                <h1> My Notes </h1>
            
                <button onClick={ () => utils.logout() } > logout </button>
          
        </div>
    )
}

export default Nav