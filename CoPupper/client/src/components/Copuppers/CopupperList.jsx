import React, { useEffect, useState } from 'react';
import Copupper from './Copupper';

const CopupperList = () => {
    const [data, setData] = useState(null);
    // const [updateCopuppers, setUpdateCopuppers] = useState(false);
    useEffect(() => {
        console.log('fetch')
        fetch('/copuppers')
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
        <div>
            {data 
                ? data.map(copupper => <Copupper key={copupper.id} {...copupper}  />) 
                : <p>Loading...</p>}
        </div>
    )
}

export default CopupperList;
