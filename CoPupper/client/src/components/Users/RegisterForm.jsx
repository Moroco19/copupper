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
                <h1>Welcome to the CoPuppers!</h1>
                <form onSubmit={(evt) => handleRegisterSubmit(evt, { username, password, email, first_name, last_name })}>
                    <input type="text" name="username" placeholder="Username" value={username} onChange={(evt) => setUsername(evt.target.value)} />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
                    <input type="test" name="email" placeholder="Email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
                    <input type="test" name="first_name" placeholder="First Name" value={first_name} onChange={(evt) => setFirst_Name(evt.target.value)} />
                    <input type="test" name="last_name" placeholder="Last Name" value={last_name} onChange={(evt) => setLast_Name(evt.target.value)} />
                    <input type="submit" value="Register" />
                    {Auth.isUserAuthenticated() && <Redirect oush to='/profile' />}
                </form>
            </aside>
            <aside className="right-aside">
            </aside>
        </div> 
    )
}

export default RegisterForm;