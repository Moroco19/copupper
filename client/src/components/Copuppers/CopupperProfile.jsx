import React, { useEffect, useState } from 'react';
import Auth from '../../modules/auth';

const CoPupperProfile = ({ match, user }) => {
    const [copupper, setCopupper] = useState('')
    const [profAva, setProfAva] = useState('')
    const [avatar, setAvatar] = useState('')
    const [office, setOffice] = useState('')
    const [department, setDepartment] = useState('')
    const [gallery, setGallery] = useState('')
    const [galleryImage, setGalleryImage] = useState('')
    const [trainer, setTrainer] = useState('')

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
            console.log(user)
            setCopupper(res.copupper)
            setProfAva(res.avatar[0])
            setOffice(res.office[0])
            setDepartment(res.department[0])
            setGallery(res.gallery)
            setTrainer(res.trainer[0])
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

    const submitGalleryImage = (evt) => {
        evt.preventDefault();
        const form = new FormData()
        form.append("image", galleryImage)
        form.append("copupper_id", copupper.id)
        form.append("is_avatar", false)
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
                    {trainer.username === user.username
                        ? 
                        <>
                            <form onSubmit={submitAvatar}>
                                <input type="file" name="image" onChange={(evt) => setAvatar(evt.target.files[0])} />
                                <input type="submit" value="Upload Avatar" />
                            </form>
                        </>
                        : ''}
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
                    <p>Next time you are over this way you should stop by and say hello to me and my trainer, {trainer.first_name}.</p>
                </summary>
                <article className="copupper-profile-article">
                    <h3>CoPupper Gallery</h3>
                    {trainer.username === user.username
                        ? 
                        <>
                            <p>Add new gallery image!</p>
                            <form onSubmit={submitGalleryImage}>
                                <input type="file" name="image" onChange={(evt) => setGalleryImage(evt.target.files[0])} />
                                <input type="submit" value="Upload Image" />
                            </form>
                        </>
                        : ''}
                    <section className="copupper-gallery">
                    {gallery 
                        ? gallery.map(image => <img key={image.id} className="copupper-gallery-image" src={image.url} alt="copupper gallery"/>)
                        : 'Non-avatar images will show here!'}
                    </section>
                </article>
            </section>
            
        </main>
    )
}

export default CoPupperProfile;