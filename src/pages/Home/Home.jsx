import React from 'react';
import Hero from './Hero';
import Work from './Work';
import Service from './Service';
import Brand from './Brand';
import Percel from './Percel';
import Merchant from './Merchant';
import Testimonial from './Testimonial';
import Faq from './Faq';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto pt-14'>
            <Hero/>
            <Work/>
            <Service/>
            <Brand/>
            <Percel/>
            <Merchant/>
            <Testimonial/>
            <Faq/>
        </div>
    );
};

export default Home;