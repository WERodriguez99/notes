
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import { rootStore } from '../../redux/store';

import utils from '../../utils';
import Loader from '../loader';
import Register from './register';
import Login from './login';

const Register_login: React.FC = (): JSX.Element => {

    const [ state, setState ] = useState( true );
    const loading = useSelector(( state: rootStore ) => state.register_login.loading)
    const element = utils.getElement("loader");

    return (
        <>
            { !loading ? state ? <Login/> : <Register/> : ReactDOM.createPortal(<Loader/>, element) }

            { !loading && <button onClick={ ()=> setState(state ? false:true) }/>}
        </>
    )
};

export default Register_login;