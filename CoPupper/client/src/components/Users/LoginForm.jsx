import React, {useState} from 'react'
import { Redirect, Link } from 'react-router-dom';
import Auth from '../../modules/auth';

const LoginForm = ({ handleLoginSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="not-logged-in">
            <aside className="left-aside">
                <h1>Welcome to the CoPuppers!</h1>
                <form onSubmit={(evt) => handleLoginSubmit(evt, { username, password })}>
                    <input type="text" name="username" placeholder="Username" value={username} onChange={(evt) => setUsername(evt.target.value)} />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
                    <input type="submit" value="Log In" />
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