import React, { useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';
import Auth from '../modules/auth';

const Nav = ({ navUser, handleLogout }) => {
    useEffect(() => {
        fetch('/profile', {
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res.user)
            navUser(res.user)
        })
    }, []);

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add-copupper">Add a CoPupper!</Link>
            <Link to="/copuppers">All CoPuppers</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/logout" onClick={() => handleLogout()}>Logout</Link>
        </nav>
    )
}

export default Nav;