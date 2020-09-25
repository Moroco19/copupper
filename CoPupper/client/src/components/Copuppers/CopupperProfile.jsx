import React, { useEffect, useState } from 'react';
import Auth from '../../modules/auth';

const CoPupperProfile = ({ match }) => {
    const [copupper, setCopupper] = useState('')
    const [profAva, setProfAva] = useState('')
    const [avatar, setAvatar] = useState('')

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
            console.log(res.avatar[0])
            setCopupper(res.copupper)
            setProfAva(res.avatar[0])
        })
    }, []);

    const submitAvatar = (evt) => {
        evt.preventDefault();
        const form = new FormData()
        form.append("image", avatar)
        form.append("copupper_id", copupper.id)
        fetch(`/images`, {
            method: 'POST',
            body: form
        })
    }

    return (
        <div>
            <h1>Hi from CoPupper {copupper.name}'s Profile</h1>
            <img src={profAva ? profAva.url : "/no_avatar.png"} className="copupper-avatar" />
            <form onSubmit={submitAvatar}>
                <input type="file" name="image" onChange={(evt) => setAvatar(evt.target.files[0])} />
                <input type="submit" value="Upload Avatar" />
            </form>
        </div>
    )
}

export default CoPupperProfile;