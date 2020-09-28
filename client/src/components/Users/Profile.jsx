import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
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
                    <h2>Welcome to your profile, {data.first_name}!</h2>
                    {data.copuppers.length > 0 ?
                    <>
                    <h3>Here are your copuppers</h3>
                    <section className="profile-copupper-container">
                    {data.copuppers.map(copupper => (
                        <div key={copupper.id} className="user-copupper-list">
                            <Link to={`/copuppers/${copupper.id}`}><h3>{copupper.name}</h3></Link>
                            <p>{copupper.breed}</p>
                            <p>{copupper.age}</p>
                            <Link to={`/copuppers/${copupper.id}/edit`}><span>Update {copupper.name}'s Info</span></Link>
                        </div>
                    ))}
                    </section></>
                    : <Link to="/add-copupper" className="no-copuppers-add">Add a CoPupper!</Link>}
                  </>
                : <i className="fas fa-dog">Loading...</i>
            }
            {!Auth.isUserAuthenticated() && <Redirect to="/login" />}
        </div>
    )
}

export default Profile;