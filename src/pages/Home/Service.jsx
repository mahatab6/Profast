import React from 'react';
import service from '../../assets/service.png'

const Service = () => {
    return (
        <div className='bg-[#03373D] py-28 px-24 w-11/12 mx-auto rounded-3xl'>
            <div className='text-center pb-8 space-y-2'>
                <h1 className='text-4xl font-extrabold text-white'>Our Services</h1>
                <p className='text-xl text-white'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='py-8 px-6 bg-base-100 w-96 justify-items-center text-center space-y-2 rounded-2xl'>
                    <img src={service} alt="" />
                    <h1 className='text-2xl font-bold'>Express  & Standard Delivery</h1>
                    <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                <div className='py-8 px-6 bg-base-100 w-96 justify-items-center text-center space-y-2 rounded-2xl'>
                    <img src={service} alt="" />
                    <h1 className='text-2xl font-bold'>Nationwide Delivery</h1>
                    <p>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                </div>
                <div className='py-8 px-6 bg-base-100 w-96 justify-items-center text-center space-y-2 rounded-2xl'>
                    <img src={service} alt="" />
                    <h1 className='text-2xl font-bold'>Fulfillment Solution</h1>
                    <p>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>
                <div className='py-8 px-6 bg-base-100 w-96 justify-items-center text-center space-y-2 rounded-2xl'>
                    <img src={service} alt="" />
                    <h1 className='text-2xl font-bold'>Cash on Home Delivery</h1>
                    <p>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                </div>
                <div className='py-8 px-6 bg-base-100 w-96 justify-items-center text-center space-y-2 rounded-2xl'>
                    <img src={service} alt="" />
                    <h1 className='text-2xl font-bold'>Corporate Service / Contract In Logistics</h1>
                    <p>Customized corporate services which includes warehouse and inventory management support.</p>
                </div>
                <div className='py-8 px-6 bg-base-100 w-96 justify-items-center text-center space-y-2 rounded-2xl'>
                    <img src={service} alt="" />
                    <h1 className='text-2xl font-bold'>Parcel Return</h1>
                    <p>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;