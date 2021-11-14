
import React, { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';

import { rootStore } from '../../redux/store'
import Register from './register';
import Login from './login';

const Register_login: React.FC = (): JSX.Element => {

    const [ state, setState ] = useState( true );
    //const store = useSelector(( state: rootStore ) => state.login)

    return (
        <>
            {
                state ? <Login/> : <Register/>
            }

            <button onClick={ ()=> setState(state ? false:true) }/>
        </>
    )
};

export default Register_login;