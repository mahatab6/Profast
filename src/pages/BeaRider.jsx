import React from 'react';
import riderlogo from "../assets/agent-pending.png"

const BeaRider = () => {
    return (
        <div className='w-11/12 mx-auto min-h-screen content-center'>
            <div className=' space-y-3 '>
                <h1 className='text-2xl font-bold'>Be a Rider</h1>
                <p className='text-xl pb-10'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p>
                <hr />
            </div>
            <div className='flex justify-around'>
                <div className=''>
                    <h2 className='text-2xl font-bold py-5'>Tell us about yourself</h2>
                    <form >
                       <div className='flex justify-between gap-3 w-full'>
                            <fieldset>
                                <label className='block mb-2 font-bold' htmlFor="name">Your Name</label>
                                <input type="text" className='w-3xs border p-2' placeholder='enter your name' />
                            </fieldset> 
                            <fieldset>
                                <label className='block mb-2 font-bold' htmlFor="name">Your age</label>
                                <input type="text" className='w-3xs border p-2' placeholder='your age' />
                            </fieldset> 
                       </div>
                       
                       <div className='flex justify-between gap-3 w-full'>
                            <fieldset>
                                <label className='block mb-2 font-bold' htmlFor="name">Your Email</label>
                                <input type="text" className='w-3xs border p-2' placeholder='enter your email' />
                            </fieldset> 
                            <fieldset>
                                <label className='block mb-2 font-bold' htmlFor="name">Your Region</label>
                                <select name="" id="" className='w-3xs border p-2'>
                                    <option value="Mr">Mr</option>
                                </select>
                            </fieldset> 
                       </div>

                        <div className='flex justify-between gap-3 w-full'>
                            <fieldset>
                                <label className='block mb-2 font-bold' htmlFor="name">Your NID</label>
                                <input type="text" className='w-3xs border p-2' placeholder='enter your NID number' />
                            </fieldset> 
                            <fieldset>
                                <label className='block mb-2 font-bold' htmlFor="name">Your Contact</label>
                                <input type="text" className='w-3xs border p-2' placeholder='Contact' />
                            </fieldset> 
                       </div>
                       <div>
                            <label className='block mb-2 font-bold' htmlFor="name">Which wire-house you want to work?</label>
                            <select name="" id="" className='w-full border p-2'>
                                    <option value="Mr">Mr</option>
                            </select>
                       </div>
                       <button className='bg-[#CAEB66] w-full p-2 font-bold mt-5 rounded-xl btn'>submit</button>
                    </form>
                </div>
                <div className=''>
                    <img src={riderlogo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BeaRider;