import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router';

const ProfastLog = () => {
    return (
        <Link to="/" className='flex items-end'>
            <img src={logo} alt="" />
            <p className='text-3xl font-bold -ml-3'>Profast</p>
        </Link>
    );
};

export default ProfastLog;