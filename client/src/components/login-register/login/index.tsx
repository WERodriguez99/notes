
import React, { useState, ChangeEvent, ReactElement } from 'react';
import { useDispatch } from 'react-redux'
import utils from '../../../utils'

import LoginAction from '../../../redux/actions/actions-creators/loginAction';

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
        dispatch(LoginAction(state))
    }

    return (
        <div>
            <h2> login </h2>

            <form onSubmit={e => utils.handleSubmit(e)}>
                <label> MAIL </label>
                <input id='mail' value={state.mail} placeholder='mail' onChange={ e => handleChange(e) }/>

                <label> PASSWORD </label>
                <input id='pass' value={state.pass} placeholder='password' onChange={ e => handleChange(e) }/>

                <button type='submit' onClick={() => sendData(state)}> LOGIN </button>
            </form>
        </div>
    )
    
}

export default Login;
