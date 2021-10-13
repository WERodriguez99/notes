import axios from 'axios';
import React, { useState } from 'react';

const Singup = () => {
    const [ state, setState ] = useState({
        name: undefined,
        mail: undefined,
        pass: undefined, 
    });

    const handleChange = e => {
        const id = e.target.id;
        const value = e.target.value;
        setState({...state, [id]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const sendData = (state) => {
        axios.post('http://localhost:3001/singup', state)
    }

    return (
        <div>
            <h2> singup </h2>

            <form onSubmit={e => handleSubmit(e)}>
                <label> NAME </label>
                <input id='name' value={state.name} placeholder='name' onChange={ e => handleChange(e) }/>

                <label> MAIL </label>
                <input id='mail' value={state.mail} placeholder='mail' onChange={ e => handleChange(e) }/>

                <label> PASSWORD </label>
                <input id='pass' value={state.pass} placeholder='password' onChange={ e => handleChange(e) }/>

                <button type='submit' onClick={() => sendData(state)}/>
            </form>
        </div>
    )
}

export default Singup;