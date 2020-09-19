import React from 'react';
import { Route } from 'react-router-dom';
import { CopupperList } from './Copuppers';

const Router = () => {
    return (
        <>
            <Route exact path="/copuppers" component={CopupperList} />
        </>
    )
}

export default Router;