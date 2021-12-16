
import React, { useState, ChangeEvent, ReactElement } from 'react';
import { useDispatch } from 'react-redux'
import utils from '../../../utils'

import RegisterLoginAction from '../../../redux/actions/actions-creators/register_loginAction';

import './index.scss';

interface StateModel {
    mail: string,
    pass: string
}

const Login: React.FC = (): JSX.Element => {
    
    const dispatch = useDispatch()
    const [ state, setState ] = useState({
        mail: '',
        pass: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const id: string = e.target.id;
        const value: string | number = e.target.value;
        setState({...state, [id]: value});
    };

    const sendData = ( state: StateModel ): void => {
        dispatch(RegisterLoginAction.loading())
        dispatch(RegisterLoginAction.Login(state))
    }

    return (
        <div className='form'>
            
            <h2> login  </h2>

            <form onSubmit={e => utils.handleSubmit(e)} autoComplete='nope' >
                <input  type='mail' id='mail' value={state.mail} placeholder='mail' onChange={ e => handleChange(e) }/>

                <input type='password' id='pass' value={state.pass} placeholder='password' onChange={ e => handleChange(e) }/>

                <div className='containerBTN'>
                    <button type='submit' onClick={() => sendData(state)}> send </button>
                </div>
            </form>
        </div>
    )
    
}

export default Login;
