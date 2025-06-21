import React from 'react';
import amazon from '../../assets/brands/amazon.png'
import vector from '../../assets/brands/amazon_vector.png'
import casio from '../../assets/brands/casio.png'
import moonstar from '../../assets/brands/moonstar.png'
import randstad from '../../assets/brands/randstad.png'
import start from '../../assets/brands/start-people 1.png'
import people from '../../assets/brands/start.png'
import Marquee from 'react-fast-marquee';

const Brand = () => {
    const brandlogo = [ amazon, vector, casio, moonstar, randstad, start, people];

    return (
        <div className='py-22 w-8/12 mx-auto'>
            <h1 className='text-3xl font-extrabold text-center py-5'>We've helped thousands of sales teams</h1>
            <Marquee>
                {
                    brandlogo.map((logo) => (
                        <div className='flex items-center mx-5'>
                            <img src={logo} alt="" />
                        </div>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default Brand;