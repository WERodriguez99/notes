import React, { useState } from 'react';

const Login = () => {
    const [ state, setState ] = useState({
        mail: undefined,
        pass: undefined, 
    });

    const handleChange = e => {
        const id = e.target.id;
        const value = e.target.value;
        setState({...state, [id]: value})
    }
    return (
        <div>
            <h2> login </h2>

            <form>
                <label> MAIL </label>
                <input id='mail' value={state.mail} placeholder='mail' onChange={ e => handleChange(e) }/>

                <label> PASSWORD </label>
                <input id='pass' value={state.pass} placeholder='password' onChange={ e => handleChange(e) }/>

                
            </form>
        </div>
    )
}

export default Login;