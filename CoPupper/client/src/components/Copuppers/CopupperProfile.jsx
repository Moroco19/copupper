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
        <main className="copupper-profile-container">
            <aside className="copupper-profile-aside">
                <div className="copupper-profile-aside-container">
                    <img src={profAva ? profAva.url : "/no_avatar.png"} className="copupper-avatar profile-page-ava" />
                    <form onSubmit={submitAvatar}>
                        <input type="file" name="image" onChange={(evt) => setAvatar(evt.target.files[0])} />
                        <input type="submit" value="Upload Avatar" />
                    </form>
                    <h3>Hi! I am {copupper.name}!</h3>
                    <p>My trainer tells me I am a {copupper.breed}, isn't that neat?</p>
                </div>
            </aside>
            <section className="copupper-profile-section">
                <summary className="copupper-profile-summary">
                    <h3>Summary:</h3>
                    <p>You can find me in the {copupper.office_id} office!</p>
                    <p>I usually hang out with my friends in the {copupper.department_id} department!</p>
                </summary>
                <article className="copupper-profile-article">
                    <p>I am {copupper.age} years old!  My trainer says that's {copupper.age * 7} in pupper years.</p>
                    <p>Additional CoPupper detail features (ex. friendly with others, walk times, preferred diet, ok for treats...etc)</p>
                </article>
            </section>
            
        </main>
    )
}

export default CoPupperProfile;