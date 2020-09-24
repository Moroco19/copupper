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
        <form onSubmit={(evt) => handleRegisterSubmit(evt, { username, password, email, first_name, last_name })}>
            <input type="text" name="username" placeholder="Username" value={username} onChange={(evt) => setUsername(evt.target.value)} />
            <input type="password" name="password" placeholder="Password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
            <input type="test" name="email" placeholder="Email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
            <input type="test" name="first_name" placeholder="First Name" value={first_name} onChange={(evt) => setFirst_Name(evt.target.value)} />
            <input type="test" name="last_name" placeholder="Last Name" value={last_name} onChange={(evt) => setLast_Name(evt.target.value)} />
            <input type="submit" value="Log In" />
            {Auth.isUserAuthenticated() && <Redirect oush to='/profile' />}
        </form>
    )
}

export default RegisterForm;