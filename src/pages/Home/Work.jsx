import React from 'react';
import booking from '../../assets/bookingIcon.png'

const Work = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='pt-14 pb-8 font-extrabold text-3xl'>How it Works</h1>
            <div className='grid grid-cols-4'>
                <div className='w-76 space-y-2 p-8'>
                    <img src={booking} alt="" />
                    <h2 className='text-2xl'>Booking Pick & Drop</h2>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='w-76 space-y-2 p-8'>
                    <img src={booking} alt="" />
                    <h2 className='text-2xl'>Cash On Delivery</h2>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='w-76 space-y-2 p-8'>
                    <img src={booking} alt="" />
                    <h2 className='text-2xl'>Delivery Hub</h2>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='w-76 space-y-2 p-8'>
                    <img src={booking} alt="" />
                    <h2 className='text-2xl'>Booking SME & Corporate</h2>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default Work;