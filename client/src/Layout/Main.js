import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import 'flowbite';
import { Outlet } from 'react-router-dom';
const main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default main;