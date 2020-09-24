import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../../modules/auth';

const Profile = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('/profile', {
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            }
        })
        .then(res => res.json())
        .then(res => {
            setData(res.user)
        })
    }, []);

    return (
        <div className="profile">
            {data
                ? <>
                    <h2>Welcome to your profile, {data.username}!</h2>
                    <h3>Here are your copuppers</h3>
                    <ul>
                        {data.copuppers.map(copupper => (
                            <li key={copupper.id}>
                                <h3>{copupper.name}</h3>
                                <p>{copupper.breed}</p>
                                <p>{copupper.age}</p>
                            </li>
                        ))}
                    </ul>
                  </>
                : <p>Loading...</p>
            }
            {!Auth.isUserAuthenticated() && <Redirect to="/login" />}
        </div>
    )
}

export default Profile;