import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import 'flowbite';
import { Outlet } from 'react-router-dom';
const main = () => {
    return (
        <div>
            <div className="sticky top-0">
                <NavBar />
            </div>
            <Outlet />
        </div>
    )
}

export default main;