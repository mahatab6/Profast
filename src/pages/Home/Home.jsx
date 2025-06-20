import React from 'react';
import Hero from './Hero';
import Work from './Work';
import Service from './Service';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto pt-14'>
            <Hero/>
            <Work/>
            <Service/>
        </div>
    );
};

export default Home;