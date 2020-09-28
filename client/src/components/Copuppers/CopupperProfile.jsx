import React, { useEffect, useState } from 'react';
import Auth from '../../modules/auth';

const CoPupperProfile = ({ match }) => {
    const [copupper, setCopupper] = useState('')
    const [profAva, setProfAva] = useState('')
    const [avatar, setAvatar] = useState('')
    const [office, setOffice] = useState('')
    const [department, setDepartment] = useState('')
    const [gallery, setGallery] = useState('')

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
            console.log(res)
            setCopupper(res.copupper)
            setProfAva(res.avatar[0])
            setOffice(res.office[0])
            setDepartment(res.department[0])
            setGallery(res.gallery)
        })
    }, [match.match.params.id]);

    const submitAvatar = (evt) => {
        evt.preventDefault();
        const form = new FormData()
        form.append("image", avatar)
        form.append("copupper_id", copupper.id)
        form.append("is_avatar", true)
        fetch(`/images`, {
            method: 'POST',
            body: form
        })
    }

    return (
        <main className="copupper-profile-container">
            <aside className="copupper-profile-aside">
                <div className="copupper-profile-aside-container">
                    <img src={profAva ? profAva.url : "/no_avatar.png"} className="copupper-avatar profile-page-ava" alt="copupper avatar" />
                    <form onSubmit={submitAvatar}>
                        <input type="file" name="image" onChange={(evt) => setAvatar(evt.target.files[0])} />
                        <input type="submit" value="Upload Avatar" />
                    </form>
                    <h3>Hi! I am {copupper.name}!</h3>
                    <p>My trainer tells me I am a {copupper.breed}, isn't that neat?</p>
                    <p>I am {copupper.age} years old!  My trainer says that's {copupper.age * 7} in pupper years.</p>
                </div>
            </aside>
            <section className="copupper-profile-section">
                <summary className="copupper-profile-summary">
                    <h3>Summary:</h3>
                    <p>You can find me in the {office.name} office!</p>
                    <p>I usually hang out with my friends in the {department.name} department!</p>
                </summary>
                <article className="copupper-profile-article">
                    <h3>CoPupper Gallery</h3>
                    {gallery 
                        ? gallery.map(image => <img key={image.id} className="copupper-gallery" src={image.url} alt="copupper gallery"/>)
                        : 'Non-avatar images will show here!'}
                </article>
            </section>
            
        </main>
    )
}

export default CoPupperProfile;