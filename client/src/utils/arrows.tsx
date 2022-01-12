
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

import '../scss/arrow.scss';

const Arrow: React.FC<{direct: number}> = ({direct}): JSX.Element => {
    
    return (
        <div style={{transform: `rotate(${direct}deg)`}}>
            {<FontAwesomeIcon icon={faArrowAltCircleUp} id='arrow' />}
        </div>
        
    )
}   

export default Arrow;