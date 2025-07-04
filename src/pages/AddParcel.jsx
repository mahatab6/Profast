import React from 'react';
import { useForm } from 'react-hook-form';

const AddParcel = () => {

const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);


    return (
        <div>
            <h1 className='text-4xl font-bold py-10'>Add Parcel</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <h3 className='text-xl font-bold pt-5'>Enter your parcel details</h3>
                <div className='flex gap-5'>
                    <div className='items-center'>
                        <input {...register("parcelType")} type="radio" value="Document" />
                        <label htmlFor="" className='text-xl pl-2'>Document</label>
                    </div>
                    <div className='items-center'>
                        <input {...register("parcelType")} type="radio" value="Not-Document" />
                        <label htmlFor="" className='text-xl pl-2'>Not-Document</label>
                    </div>
                </div>
                <div className='flex py-5'>
                    <div className='flex-1'>
                        <label htmlFor="" className='text-xl block pb-2'>Parcel name</label>
                        <input type="text" placeholder="Parcel Name" className='w-full border p-2 rounded-xl' {...register("Parcel Name", {})} />
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="" className='text-xl block pb-2'>Parcel Weight (KG)</label>
                        <input type="number" placeholder="Parcel Weight (KG)" className='w-full border p-2 rounded-xl' {...register("Parcel Weight (KG)", {required: true})} />
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        <h2 className='text-xl font-bold pt-5'>Sender Details</h2>
                        <div className='flex pt-3'>
                            <div className='flex-1'>
                                <label htmlFor="" className='text-xl block pb-2'>Sender Name</label>
                                <input type="text" placeholder="Sender Name" className='w-full border p-2 rounded-xl' {...register("Parcel Name", {})} />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="" className='text-xl block pb-2'>Sender Pickup Wire house</label>
                                <select className='w-full border p-2 rounded-xl' {...register("Select Wire house")}>
                                    <option value="Select Wire house">Select Wire house</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex pt-3'>
                            <div className='flex-1'>
                                <label htmlFor="" className='text-xl block pb-2'>Address</label>
                                <input type="text" placeholder="Address" className='w-full border p-2 rounded-xl' {...register("Parcel Name", {})} />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="" className='text-xl block pb-2'>Sender Contact No</label>
                                <input type="text" placeholder="Sender Contact No" className='w-full border p-2 rounded-xl' {...register("Parcel Name", {})} />
                            </div>
                        </div>
                        <div className=''>
                            <label htmlFor="" className='text-xl block pb-2'>Your Region</label>
                            <select className='w-full border p-2 rounded-xl' {...register("Your Region")}>
                                <option value="Your Region">Your Region</option>
                            </select>
                        </div>
                        <div className=''>
                            <label htmlFor="" className='text-xl block pb-2'>Pickup Instruction</label>
                            <textarea className='w-full border' placeholder='Pickup Instruction' {...register("Pickup Instruction", {})} />
                        </div>
                    </div>
                </div>

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddParcel;