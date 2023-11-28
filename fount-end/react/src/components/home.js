import React from 'react';
import { Outlet } from 'react-router-dom';
import { SearchBar } from './searchBar';
import { Err } from './error';

export const Home = () => {
    if(!localStorage.uesr){
        return <Err/>
    }

    const localStor = JSON.parse(localStorage.uesr)

    return (<>
        < SearchBar />
        <h1>{localStor.name}</h1>
        <Outlet />
    </>)
}