import React from 'react';
import { Outlet } from 'react-router-dom';
import { SearchBar } from './searchBar';

export const Home = () => {
    const localStor = JSON.parse(localStorage.uesr)

    return (<>
        < SearchBar />
        <h1>{localStor.name}</h1>
        <Outlet />
    </>)
}