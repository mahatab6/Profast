import React from 'react';
import live from '../../assets/live-tracking.png'
import delivery from '../../assets/safe-delivery.png'

const Percel = () => {
    return (
        <div className='w-11/12 mx-auto space-y-4 border-dashed border-y-2 py-8'>
            <div className='flex items-center justify-center rounded-xl p-5 bg-base-300'>
                <img className='border-dashed border-r-2 pr-4 w-40' src={live} alt="" />
                <div className=' pl-4'>
                    <h2 className='text-2xl font-bold'>Live Parcel Tracking</h2>
                    <p className='text-xl'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
            <div className='flex items-center justify-center rounded-xl p-5 bg-base-300'>
                <img className='border-dashed border-r-2 pr-4 w-40' src={delivery} alt="" />
                <div className=' pl-4'>
                    <h2 className='text-2xl font-bold'>100% Safe Delivery</h2>
                    <p className='text-xl'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process  guarantees safe and damage-free delivery every time.</p>
                </div>
            </div>
            <div className='flex items-center justify-center rounded-xl p-5 bg-base-300'>
                <img className='border-dashed border-r-2 pr-4 w-40' src={delivery} alt="" />
                <div className=' pl-4'>
                    <h2 className='text-2xl font-bold'>24/7 Call Center Support</h2>
                    <p className='text-xl'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
        </div>
    );
};

export default Percel;