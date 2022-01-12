
import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux'
import utils from '../../../utils'

import RegisterLoginAction from '../../../redux/actions/actions-creators/register_loginAction';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

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

    const [ viewPass, setViewPass ] = useState({
        boolean: false,
        type: 'password',
        state: 'eyeSlashDisabled'
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

                <input type={viewPass.type} id='pass' value={state.pass} placeholder='password' onChange={ e => handleChange(e) }/>

                <button id='btn_eyeSlash' onClick={ () => setViewPass({boolean: !viewPass.boolean, type: !viewPass.boolean ? 'text' : 'password', state: !viewPass.boolean ? 'eyeSlashActive' : 'eyeSlashDisabled'})} > <FontAwesomeIcon icon={faEyeSlash} id={viewPass.state}/> </button>

                <div className='containerBTN'>
                    <button type='submit' onClick={() => sendData(state)}> send </button>
                </div>
            </form>
        </div>
    )
    
}

export default Login;
