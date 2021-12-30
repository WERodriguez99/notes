
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import { rootStore } from '../../redux/store';

import utils from '../../utils';
import Loader from '../loader';
import Register from './register';
import Login from './login';


import './index.scss'
//import logo from '../../img/noteIcon_02.png'

const Register_login: React.FC = (): JSX.Element => {

    const [ state, setState ] = useState({
        text: 'register',
        s: true,
        classN: 'send_btn_login'
    });
    const [ landing, setLanding ] = useState(true)
    const store = useSelector(( state: rootStore ) => state.register_login)
    const element = utils.getElement("emergent");

    useEffect(() => {
        setState({ ...state, text: !state.s? 'login' : 'register', classN: state.s? 'send_btn_register' : 'send_btn_login'})
    }, [state.s])

    const offLanding = ( prop: boolean ) => {
        setState({ ...state,  s: prop })
        setLanding(false)
    }
    return (
        !store.loading ? landing 
        ? 
            <div>
                <h2> Welcome to MyNote  </h2>
                <p> <button onClick={() => offLanding(false) }> register </button> or <button onClick={() => offLanding(true) } > login </button> </p>
            </div> 
        : 
        
        !store.msj 
        
        ?
        
        <div className='containerIMGLanding'>
            { 
                state.s ? <div className='containerForm_login'> <Login/> </div> : <div className='containerForm_register'> <Register/> </div>
            } 
            <button className={state.classN} onClick={ ()=> setState({ ...state, s: !state.s, text: state.s? 'login' : 'register' }) }>{state.text}</button>
        </div>

        :

        <div>
            <p> check your email to activate the account </p>
        </div>
        
        :

        ReactDOM.createPortal(<Loader/>, element)
    )
};

export default Register_login;