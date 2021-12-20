
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import RegisterActions from '../../../redux/actions/actions-creators/register_loginAction';

import IRegister from '../../../models/register';
import validate from '../../../utils/validate'

import './index.scss';

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
        confirmPass: "",
    });

    const [ err, setErr ] = useState<IRegister>({})

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const id = e.target.id;
        const value = e.target.value;
        setState({...state, [id]: value})

        let ErrValidate: string = validate.err({ ...state, [id]: value }, id )
        

        ErrValidate ? !err ? setErr({ [id]: ErrValidate }) : setErr({ ...err, [id]: ErrValidate }) : delete err[id as keyof IRegister]
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
    }

    const sendData = async (state: stateModel): Promise<void> => {
        dispatch( RegisterActions.loading() );
        dispatch( RegisterActions.Register(state) )
    }

    return (
        <div className='form_register'>
            <h2> register </h2>

            <form onSubmit={ e => handleSubmit(e) } autoComplete='nope' >
                <input type='text' id='name' value={state.name} placeholder='name' onChange={ e => handleChange(e) }/>
                { err.name && <div className='container_err_name'> <p className='err'> {err.name} </p> </div>}

                <input type='mail' id='mail' value={state.mail} placeholder='mail' onChange={ e => handleChange(e) }/>
                { err.mail && <div className='container_err_mail'> <p className='err'> {err.mail} </p> </div> }

                <input type='password' id='pass' value={state.pass} placeholder='password' onChange={ e => handleChange(e) }/>
                { err.pass && <div className='container_err_pass' > <p className='err'> {err.pass} </p> </div> }

                <div className='containerBTN'>
                    <button type='submit' onClick={() => sendData(state)}> send </button>
                </div>
            </form>
        </div>
    )
};

export default Register;