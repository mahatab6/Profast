import React from 'react';
import { Link } from 'react-router';
import location from '../../assets/location-merchant.png'

const Merchant = () => {
    return (
        <div className='flex items-center bg-[url("assets/be-a-merchant-bg.png")] bg-no-repeat bg-[#03373D] w-11/12 mx-auto p-20 rounded-2xl mt-20'>
            <div className=' space-y-4'>
                <h1 className='text-4xl font-extrabold'>Merchant and Customer Satisfaction is Our First Priority</h1>
                <p>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                <div className=''>
                    <Link className='btn text-xl font-bold mr-3 bg-[#CAEB66] rounded-4xl text-black'>Become a Merchant</Link>
                    <Link className='btn text-xl font-bold text-[#CAEB66] border-[#CAEB66] bg-[#03373D] rounded-4xl'>Earn with Profast Courier</Link>
                </div>
            </div>
            <img src={location} alt="" />
        </div>
    );
};

export default Merchant;