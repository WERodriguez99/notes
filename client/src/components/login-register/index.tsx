
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import { rootStore } from '../../redux/store';

import utils from '../../utils';
import Loader from '../loader';
import Register from './register';
import Login from './login';

import './index.scss'

const Register_login: React.FC = (): JSX.Element => {

    const [ state, setState ] = useState({
        text: 'register',
        s: true,
        classN: 'send_btn_login'
    });
    const loading = useSelector(( state: rootStore ) => state.register_login.loading)
    const element = utils.getElement("emergent");

    return (
        <>
            { 
                !loading ? state.s ? <div className='containerForm_login'> <Login/> </div> : <div className='containerForm_register'> <Register/> </div> : ReactDOM.createPortal(<Loader/>, element) }

            { !loading && <button className={state.classN} onClick={ ()=> setState({ s: !state.s, text: state.s? 'login' : 'register', classN: state.s? 'send_btn_register' : 'send_btn_login'}) }>{state.text}</button>}
        </>
    )
};

export default Register_login;