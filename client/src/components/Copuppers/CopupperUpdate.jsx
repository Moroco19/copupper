import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../../modules/auth';

const CoPupperUpdate = ({ match, allOffices, allDepartments }) => {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [age, setAge] = useState('')
    const [office_id, setOffice] = useState('')
    const [department_id, setDepartment] = useState('')
    const [redirectAfterSubmit, setRedirectAfterSubmit] = useState(false)
    const [copupper, setCopupper] = useState('')
    const [profAva, setProfAva] = useState('')

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
            setProfAva(res.avatar[0])
        })
    }, [match.match.params.id]);

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
        <main className="coppuper-edit-container">
            {copupper 
                ? <>
                    <img src={profAva ? profAva.url : "/no_avatar.png"} className="copupper-avatar update-page-ava" alt="copupper-avatar" />
                    <section className="copupper-form-container">
                        <i className="fas fa-dog"></i><h1>Edit Your CoPupper!</h1>
                        <form onSubmit={handleCopupperSubmit} className="copupper-form">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" value={name} onChange={(evt) => setName(evt.target.value)} />
                            <label for="breed">Breed</label>
                            <input type="text" id="breed" name="breed" value={breed} onChange={(evt) => setBreed(evt.target.value)} />
                            <label for="age">Age</label>
                            <input type="integer" id="age" name="age" value={age} onChange={(evt) => setAge(evt.target.value)}/>
                            <label for="office">Office</label>
                            <select id="office" name="office_id" value={office_id} onChange={(evt) => setOffice(evt.target.value)}>
                                {allOffices 
                                    ? allOffices.map(office => <option key={office.id} value={office.id}>{office.name}</option>) 
                                    : ''}
                            </select>
                            <label for="department">Department</label>
                            <select id="department" name="department_id" value={department_id} onChange={(evt) => setDepartment(evt.target.value)}>
                                {allDepartments 
                                    ? allDepartments.map(department => <option key={department.id} value={department.id}>{department.name}</option>) 
                                    : ''}
                            </select>
                            <input type="submit" value="Submit Updated CoPupper!" />
                        </form>
                    </section>
                  </>
                : <i className="fas fa-dog">Loading...</i>
            }

            {redirectAfterSubmit && <Redirect push to="/profile" />}
        </main>
    )
}

export default CoPupperUpdate;