import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {

    const history = useHistory();
    const [email,setEmail]=useState('');
    const [password, setPassword] = useState('')
    const signIn= event=>{
        event.preventDefault();

        //some firebase login
        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/');
        })
        .catch(error=>alert(error.message));
    }
    const register=event=>{
        event.preventDefault();

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //Successfully created a new user with email and password.
            console.log(auth);
            if(auth)
            {
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))

        //some firebase register
    }

    return (
        <div className="login">
        <Link to="/">
            <img className="login_logo" src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Logo"/>
        </Link>
        <div className="login_container">
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={event=>setEmail(event.target.value)}/>
                <h5>Password</h5>
                <input type='password'value={password} onChange={event=>setPassword(event.target.value)}/>
            </form>
            <button onClick={signIn} className="login_signin" type="submit">Sign In</button>
            <p>By signing-in you agree to Amazon Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
            <button onClick={register} className="login_register">Create your Amazon Account</button>
        </div>
        </div>
    )
}

export default Login
