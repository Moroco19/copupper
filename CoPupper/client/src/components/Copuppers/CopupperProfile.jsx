import React, { useEffect, useState } from 'react';
import Auth from '../../modules/auth';

const CoPupperProfile = ({ match }) => {
    const [copupper, setCopupper] = useState('')

    useEffect(() => {
        const id = match.match.params.id
        fetch(`/copuppers/${id}`, {
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res.copupper)
            setCopupper(res.copupper)
        })
    }, []);

    return (
        <div>
            <h1>Hi from CoPupper {copupper.name}'s Profile</h1>
        </div>
    )
}

export default CoPupperProfile;