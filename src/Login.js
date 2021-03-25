import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
const history = useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const signIn= e => {
     e.preventDefault();

    auth
    .signInWithEmailAndPassword(email, password) 
    .then(auth => {
        history.push('/')
    })
    .catch(error => alert(error.messeg))
}




const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) =>  {
        if(auth) {
            history.push('/')
        }
    })
    .catch(error => alert(error.message))
}

    return (
       
        <div className="login">
         <Link to="/">
            <img 
                className="login_logo"
                src="https://tse1.mm.bing.net/th?id=OIP.7RVODd8O4cnMyJyphxgv7AAAAA&pid=Api&P=0&w=300&h=300"
                alt="login logo"
            />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input  
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    
                    <h5>Password</h5>
                    <input  
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button 
                    type="submit"
                    className="login_signInButton"
                    onClick={signIn}
                    >Sign-in</button>
                </form>

                <p>
                    By signing in you agree to squeeky kleen T's & C's
                </p>
                <button 
                className="login_registerButton"
                onClick={register}
                >
                Create an account
                </button>

            </div>
        </div>
        
    )
}

export default Login;
