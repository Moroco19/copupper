import React, { useEffect, useState } from 'react';
import Copupper from './Copupper';
import Auth from '../../modules/auth';

const CopupperList = () => {
    const [data, setData] = useState(null);
    // const [updateCopuppers, setUpdateCopuppers] = useState(false);
    useEffect(() => {
        console.log('fetch')
        fetch('/copuppers', {
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setData(res.copuppers);
        })
        // return () => {
        //     setUpdateCopuppers(false)
        // }
    }, []);

    return (
        <main className="copupper-list">
            {data 
                ? data.map(copupper => <Copupper key={copupper.id} {...copupper}  />) 
                : <p>Loading...</p>}
        </main>
    )
}

export default CopupperList;
