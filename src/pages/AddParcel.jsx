import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const AddParcel = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [branches, setBranches] = useState([]);

  useEffect(() => {
    fetch('/warehouses.json')
      .then((res) => res.json())
      .then((data) => setBranches(data))
      .catch((err) => console.error('Failed to load warehouse data:', err));
  }, []);

  const senderDistrict = watch("senderDistrict");
  const receiverDistrict = watch("receiverDistrict");
  const parcelType = watch("parcelType");
  const parcelWeight = parseFloat(watch("parcelWeight")) || 0;
  const receiverRegion = watch("receiverRegion");

  const getCoveredAreas = (district) => {
    const branch = branches.find(b => b.district === district);
    return branch?.covered_area || [];
  };

  const getCharge = () => {
    if (!parcelType || !receiverRegion) return 0;
    const isOutsideCity = receiverRegion === 'outsideCity';
    if (parcelType === 'Document') return isOutsideCity ? 80 : 60;
    if (parcelWeight <= 3) return isOutsideCity ? 150 : 110;
    const extraKg = Math.ceil(parcelWeight - 3);
    const extraCharge = extraKg * 40;
    return (isOutsideCity ? 150 : 110) + extraCharge + (isOutsideCity ? 40 : 0);
  };

  const onSubmit = (data) => {
    const charge = getCharge();
    console.log({ ...data, deliveryCharge: charge });
    alert(`Form submitted! Delivery Charge: ৳${charge}`);
  };

  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='text-4xl font-bold py-10'>Add Parcel</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className='text-xl font-bold pt-5'>Parcel Information</h3>
        <div className='flex gap-5 py-2'>
          <label className='text-xl flex items-center gap-2'>
            <input {...register("parcelType", { required: true })} type="radio" value="Document" />
            Document
          </label>
          <label className='text-xl flex items-center gap-2'>
            <input {...register("parcelType", { required: true })} type="radio" value="Non-Document" />
            Non-Document
          </label>
        </div>
        <div className='flex py-5 gap-10'>
          <div className='flex-1'>
            <label className='text-xl block pb-2'>Parcel Name</label>
            <input type="text" className='w-full border p-2 rounded-xl' {...register("parcelName", { required: true })} />
          </div>
          <div className='flex-1'>
            <label className='text-xl block pb-2'>Parcel Weight (KG)</label>
            <input type="number" step="0.1" className='w-full border p-2 rounded-xl' {...register("parcelWeight", { required: true })} />
          </div>
        </div>

        <hr className='my-5' />

        <div className='flex gap-10'>
          {/* Sender */}
          <div className='flex-1 space-y-4'>
            <h2 className='text-xl font-bold pt-5'>Sender Details</h2>
            <div className='flex gap-5'>
              <div className='flex-1'>
                <label className='text-xl block pb-2'>Sender Name</label>
                <input type="text" className='w-full border p-2 rounded-xl' {...register("senderName", { required: true })} />
              </div>
              <div className='flex-1'>
                <label className='text-xl block pb-2'>Sender District</label>
                <select className='w-full border p-2 rounded-xl' {...register("senderDistrict", { required: true })}>
                  <option value="">Select District</option>
                  {branches.map((b, i) => (
                    <option key={i} value={b.district}>{b.district}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className='text-xl block pb-2'>Sender Area</label>
              <select className='w-full border p-2 rounded-xl' {...register("senderArea")}> 
                <option value="">Select Area</option>
                {getCoveredAreas(senderDistrict).map((area, i) => (
                  <option key={i} value={area}>{area}</option>
                ))}
              </select>
            </div>
            <div className='flex gap-5'>
              <div className='flex-1'>
                <label className='text-xl block pb-2'>Sender Address</label>
                <input type="text" className='w-full border p-2 rounded-xl' {...register("senderAddress")} />
              </div>
              <div className='flex-1'>
                <label className='text-xl block pb-2'>Sender Contact</label>
                <input type="text" className='w-full border p-2 rounded-xl' {...register("senderContact")} />
              </div>
            </div>
             <div>
              <label className='text-xl block pb-2'>Sender Region</label>
              <select className='w-full border p-2 rounded-xl' {...register("SenderRegion", { required: true })}>
                <option value="">Select Region</option>
                <option value="withinCity">Within City</option>
                <option value="outsideCity">Outside City</option>
              </select>
              {errors.receiverRegion && <p className='text-red-500'>Sender region is required</p>}
            </div>
            <div>
              <label className='text-xl block pb-2'>Pickup Instruction</label>
              <textarea className='w-full border p-2 rounded-xl' {...register("pickupInstruction")} />
            </div>
          </div>

          {/* Receiver */}
          <div className='flex-1 space-y-4'>
            <h2 className='text-xl font-bold pt-5'>Receiver Details</h2>
            <div className='flex gap-5'>
              <div className='flex-1'>
                <label className='text-xl block pb-2'>Receiver Name</label>
                <input type="text" className='w-full border p-2 rounded-xl' {...register("receiverName", { required: true })} />
              </div>
              <div className='flex-1'>
                <label className='text-xl block pb-2'>Receiver District</label>
                <select className='w-full border p-2 rounded-xl' {...register("receiverDistrict", { required: true })}>
                  <option value="">Select District</option>
                  {branches.map((b, i) => (
                    <option key={i} value={b.district}>{b.district}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className='text-xl block pb-2'>Receiver Area</label>
              <select className='w-full border p-2 rounded-xl' {...register("receiverArea")}> 
                <option value="">Select Area</option>
                {getCoveredAreas(receiverDistrict).map((area, i) => (
                  <option key={i} value={area}>{area}</option>
                ))}
              </select>
            </div>
            <div className='flex gap-5'>
              <div className='flex-1'>
                <label className='text-xl block pb-2'>Receiver Address</label>
                <input type="text" className='w-full border p-2 rounded-xl' {...register("receiverAddress")} />
              </div>
              <div className='flex-1'>
                <label className='text-xl block pb-2'>Receiver Contact</label>
                <input type="text" className='w-full border p-2 rounded-xl' {...register("receiverContact")} />
              </div>
            </div>
            <div>
              <label className='text-xl block pb-2'>Receiver Region</label>
              <select className='w-full border p-2 rounded-xl' {...register("receiverRegion", { required: true })}>
                <option value="">Select Region</option>
                <option value="withinCity">Within City</option>
                <option value="outsideCity">Outside City</option>
              </select>
              {errors.receiverRegion && <p className='text-red-500'>Receiver region is required</p>}
            </div>
            <div>
              <label className='text-xl block pb-2'>Delivery Instruction</label>
              <textarea className='w-full border p-2 rounded-xl' {...register("deliveryInstruction")} />
            </div>
          </div>
        </div>

        {/* Charges */}
        <p className='text-xl pt-5 font-semibold'>Estimated Pickup Time: 4pm – 7pm</p>
        <p className='text-2xl font-semibold py-4'>
          📦 Delivery Charge: <span className='text-green-600'>৳{getCharge()}</span>
        </p>

        <div className='text-center py-5'>
          <button type='submit' className='btn bg-[#CAEB66] px-10 py-3 rounded-xl font-bold'>
            Proceed to Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddParcel;
