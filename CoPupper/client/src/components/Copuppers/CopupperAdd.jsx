import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../../modules/auth';

const CoPupperAdd = () => {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [age, setAge] = useState('')
    const [office_id, setOffice] = useState('')
    const [department_id, setDepartment] = useState('')
    const [redirectAfterSubmit, setRedirectAfterSubmit] = useState(false)

    const handleCopupperSubmit = (evt) => {
        evt.preventDefault();
        fetch('/copuppers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            },
            body: JSON.stringify({
                copupper: {
                    name,
                    breed,
                    age,
                    office_id,
                    department_id,
                },
            }),
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setRedirectAfterSubmit(true)
        })
    }

    return (
        <>
            <form onSubmit={handleCopupperSubmit}>
                <input type="text" name="name" placeholder="CoPupper Name" value={name} onChange={(evt) => setName(evt.target.value)} />
                <input type="text" name="breed" placeholder="CoPupper Breed" value={breed} onChange={(evt) => setBreed(evt.target.value)} />
                <input type="integer" name="age" placeholder="1" value={age} onChange={(evt) => setAge(evt.target.value)}/>
                <input type="integer" name="office_id" placeholder="1" value={office_id} onChange={(evt) => setOffice(evt.target.value)}/>
                <input type="integer" name="department_id" placeholder="1" value={department_id} onChange={(evt) => setDepartment(evt.target.value)}/>
                <input type="submit" value="Submit New CoPupper!" />
            </form>
            {redirectAfterSubmit && <Redirect push to="/profile" />}
        </>
    )
}

export default CoPupperAdd;