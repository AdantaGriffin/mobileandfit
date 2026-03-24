import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/header';
import Navigation from '../Navigation/navigation';

function Root(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Navigation/>
        </>
    )
};

export default Root