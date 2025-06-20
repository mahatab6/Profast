import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componenrts/Navbar';

const MainLayouts = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayouts;