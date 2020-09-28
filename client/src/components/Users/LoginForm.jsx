import React, {useState} from 'react'
import { Redirect, Link } from 'react-router-dom';
import Auth from '../../modules/auth';

const LoginForm = ({ handleLoginSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="not-logged-in">
            <aside className="left-aside">
                <img src="/copuppers-logo-light-text.png" alt="copupper logo"/>
                <form onSubmit={(evt) => handleLoginSubmit(evt, { username, password })} className="login-form">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(evt) => setUsername(evt.target.value)} />
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
                    <input type="submit" value="Log In" className="login-register-button"/>
                    {Auth.isUserAuthenticated() && <Redirect oush to='/profile' />}
                </form>
                <p>Note a member yet? Register <Link to="/register">here</Link></p>
            </aside>
            <aside className="right-aside">
            </aside>
        </div> 
    )
}

export default LoginForm;