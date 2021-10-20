import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import utils from '../../../utils';
import axios from 'axios';

import { login } from '../../../redux/actions/login';

const Login = () => {
    
    const dispatch = useDispatch();

    const [ state, setState ] = useState({
        mail: undefined,
        pass: undefined, 
    });

    const handleChange = e => {
        const id = e.target.id;
        const value = e.target.value;
        setState({...state, [id]: value})
    }

    const sendData = async state => {
        try {
            dispatch( login(state) )
        }
        catch(err){
            alert(err)
            console.log(err)
        }
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