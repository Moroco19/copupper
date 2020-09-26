import React, { useEffect }  from 'react';
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
    }, [navUser]);

    return (
        <nav>
            <div className="left-nav">
                <Link to="/"><img src="/copuppers-paw.png" alt="dog paw print logo"/></Link>
            </div>
            <div className="right-nav">
                <ul className="nav-ul">
                    <li className="nav-li"><Link to="/copuppers" className="nav-a">All CoPuppers</Link></li>
                    <li className="nav-li"><Link to="/profile" className="nav-a">Profile</Link>
                        <div className="sub-menu">
                            <ul>
                                <li className="nav-sub-li"><Link to="/add-copupper" className="nav-sub-a">Add a CoPupper!</Link></li>
                                <li className="nav-sub-li"><Link to="/logout" className="nav-sub-a" onClick={() => handleLogout()}>Logout</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;