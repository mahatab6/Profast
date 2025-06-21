import React from 'react';
import { Outlet } from 'react-router';
import authimg from '../assets/authImage.png'

const AuthenticationLayouts = () => {
    return (
        <div className='flex min-h-screen '>
            <div className='flex-1 flex justify-center items-center'>
                <Outlet></Outlet>
            </div>
            <div className='flex-1 bg-[#FAFDF0] flex justify-center items-center '>
                <img src={authimg} alt="" />
            </div>
        </div>
    );
};

export default AuthenticationLayouts;