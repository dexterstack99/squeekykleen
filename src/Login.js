import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const signIn= e => {
    e.preventDefault();
}




const register = e => {
    e.preventDefault();
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
                    {}
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
