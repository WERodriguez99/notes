import React, { useState } from 'react';


import Login from './login';
import Singup from './singup';

const Login_Singup = () => {
    const [ state, setState ] = useState( true );

    return (
        <div>

            {state ? <Login/> : <Singup/>}

            <button onClick={ ()=> setState(state ? false : true)}/>
        </div>
    )

};

export default Login_Singup;