import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';
import Auth from '../../modules/auth';

const RegisterForm = ({ handleRegisterSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [first_name, setFirst_Name] = useState('');
    const [last_name, setLast_Name] = useState('');

    return (
        <div className="not-logged-in">
            <aside className="left-aside">
                <img src="/copuppers-logo-light-text.png" alt="copupper logo" />
                <form onSubmit={(evt) => handleRegisterSubmit(evt, { username, password, email, first_name, last_name })} className="register-form">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(evt) => setUsername(evt.target.value)} />
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
                    <label for="email">Email</label>
                    <input type="test" id="email" name="email" placeholder="Email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
                    <label for="first_name">First Name</label>
                    <input type="test" id="first_name" name="first_name" placeholder="First Name" value={first_name} onChange={(evt) => setFirst_Name(evt.target.value)} />
                    <label for="last_name">Last Name</label>
                    <input type="test" id="last_name" name="last_name" placeholder="Last Name" value={last_name} onChange={(evt) => setLast_Name(evt.target.value)} />
                    <input type="submit" value="Register" className="login-register-button" />
                    {Auth.isUserAuthenticated() && <Redirect oush to='/profile' />}
                </form>
            </aside>
            <aside className="right-aside">
            </aside>
        </div> 
    )
}

export default RegisterForm;