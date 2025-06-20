import React from 'react';
import logo from '../assets/logo.png'

const ProfastLog = () => {
    return (
        <div className='flex items-end'>
            <img src={logo} alt="" />
            <p className='text-3xl font-bold -ml-3'>Profast</p>
        </div>
    );
};

export default ProfastLog;