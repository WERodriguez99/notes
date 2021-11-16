
import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';

import RegisterActions from '../../../redux/actions/actions-creators/register_loginAction';

const Register: React.FC = (): JSX.Element => {

    const dispatch = useDispatch()
    
    type stateModel  = {
        name: string,
        mail: string,
        pass: string,
    }

    const [ state, setState ] = useState({
        name: "",
        mail: "",
        pass: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const id = e.target.id;
        const value = e.target.value;
        setState({...state, [id]: value})
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
    }

    const sendData = async (state: stateModel): Promise<void> => {
        dispatch( RegisterActions.loading() );
        dispatch( RegisterActions.Register(state) )
    }

    return (
        <>
            <h2> singup </h2>

            <form onSubmit={ e => handleSubmit(e) }>
                <label> NAME </label>
                <input id='name' value={state.name} placeholder='name' onChange={ e => handleChange(e) }/>

                <label> MAIL </label>
                <input id='mail' value={state.mail} placeholder='mail' onChange={ e => handleChange(e) }/>

                <label> PASSWORD </label>
                <input id='pass' value={state.pass} placeholder='password' onChange={ e => handleChange(e) }/>

                <button type='submit' onClick={() => sendData(state)}> SEND </button>
            </form>
        </>
    )
};

export default Register;