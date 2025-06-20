import React from 'react';
import Hero from './Hero';
import Work from './Work';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto pt-14'>
            <Hero/>
            <Work/>
        </div>
    );
};

export default Home;