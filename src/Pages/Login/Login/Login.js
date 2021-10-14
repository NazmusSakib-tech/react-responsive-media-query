import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth()
    return (
        <div>
            <h1>This is login page</h1>
            <button onClick={signInWithGoogle} className=" btn btn-warning">Google Sign in</button>
        </div>
    );
};

export default Login;