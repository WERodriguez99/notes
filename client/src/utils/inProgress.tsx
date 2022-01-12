
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import '../scss/inProgress.scss';

const InProgresss: React.FC<{text: string}> = ({text}): JSX.Element => {
    return (
        <div className='conten-cog'>
            {<FontAwesomeIcon icon={faCog} id='cog'/>}
            <p>{text}</p>
        </div>
    )
}

export default InProgresss;