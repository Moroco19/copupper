import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../../modules/auth';

const CoPupperAdd = ({ allOffices, allDepartments }) => {
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
        <main className="coppuper-add-container">
            <section className="copupper-form-container">
                <i className="fas fa-dog"></i><h1>Add a New CoPupper!</h1>
                <form onSubmit={handleCopupperSubmit} className="copupper-form">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="CoPupper Name" value={name} onChange={(evt) => setName(evt.target.value)} />
                    <label for="breed">Breed</label>
                    <input type="text" id="breed" name="breed" placeholder="CoPupper Breed" value={breed} onChange={(evt) => setBreed(evt.target.value)} />
                    <label for="age">Age</label>
                    <input type="integer" id="age" name="age" placeholder="1" value={age} onChange={(evt) => setAge(evt.target.value)}/>
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
                    <input type="submit" value="Submit New CoPupper!" />
                </form>
            </section>
            {redirectAfterSubmit && <Redirect push to="/profile" />}
        </main>
    )
}

export default CoPupperAdd;