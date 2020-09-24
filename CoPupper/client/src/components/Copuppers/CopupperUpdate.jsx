import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../../modules/auth';

const CoPupperUpdate = ({ match }) => {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [age, setAge] = useState('')
    const [office_id, setOffice] = useState('')
    const [department_id, setDepartment] = useState('')
    const [redirectAfterSubmit, setRedirectAfterSubmit] = useState(false)
    const [copupper, setCopupper] = useState('')

    useEffect(() => {
        console.log(match.match.params.id)
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
            setName(res.copupper.name)
            setBreed(res.copupper.breed)
            setAge(res.copupper.age)
            setOffice(res.copupper.office_id)
            setDepartment(res.copupper.department_id)
        })
    }, []);

    const handleCopupperSubmit = (evt) => {
        evt.preventDefault();
        fetch(`/copuppers/${copupper.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            },
            body: JSON.stringify({
                    name,
                    breed,
                    age,
                    office_id,
                    department_id,
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
            {copupper 
                ? <>
                    <form onSubmit={handleCopupperSubmit}>
                        <input type="text" name="name" value={name} onChange={(evt) => setName(evt.target.value)} />
                        <input type="text" name="breed" value={breed} onChange={(evt) => setBreed(evt.target.value)} />
                        <input type="integer" name="age" value={age} onChange={(evt) => setAge(evt.target.value)}/>
                        <input type="integer" name="office_id" value={office_id} onChange={(evt) => setOffice(evt.target.value)}/>
                        <input type="integer" name="department_id" value={department_id} onChange={(evt) => setDepartment(evt.target.value)}/>
                        <input type="submit" value="Submit Updated CoPupper!" />
                    </form>
                  </>
                : ''
            }

            {redirectAfterSubmit && <Redirect push to="/profile" />}
        </>
    )
}

export default CoPupperUpdate;