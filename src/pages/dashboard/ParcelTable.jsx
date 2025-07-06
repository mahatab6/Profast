import React from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { Link, useNavigate } from 'react-router';

const ParcelTable = ({ parcels,refetch }) => {

    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const handleDelete= (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "Are you wanting to delete this parcel?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/parcel-delete/${id}`)
                .then(res =>{
                    if(res.data.deletedCount){
                         Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch();
                    }
                })               
            }
            });
        
    }

    const handlePayment = (id) =>{
        navigate(`/dashboard/payment/${id}`)
    }
    
  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Sender Parcels</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-3 border">Tracking ID</th>
            <th className="py-2 px-3 border">Sender</th>
            <th className="py-2 px-3 border">Receiver</th>
            <th className="py-2 px-3 border">Product name</th>
            <th className="py-2 px-3 border">Weight</th>
            <th className="py-2 px-3 border">Charge</th>
            <th className="py-2 px-3 border">Created</th>
            <th className="py-2 px-3 border">Action</th>
            <th className="py-2 px-3 border">Delete</th>
          </tr>
        </thead>
        <tbody>
          {parcels?.map((parcel, idx) => (
            <tr key={idx} className="border-t">
              <td className="py-2 px-3 border">{parcel.trackingId}</td>
              <td className="py-2 px-3 border">
                <div>
                  <div className="font-semibold">{parcel.senderName}</div>
                  <div className="text-sm text-gray-500">
                    {parcel.senderDistrict}, {parcel.senderArea}
                  </div>
                </div>
              </td>
              <td className="py-2 px-3 border">
                <div>
                  <div className="font-semibold">{parcel.receiverName}</div>
                  <div className="text-sm text-gray-500">
                    {parcel.receiverDistrict}, {parcel.receiverArea}
                  </div>
                </div>
              </td>
              <td className="py-2 px-3 border">{parcel.parcelName}</td>
              <td className="py-2 px-3 border">{parcel.parcelWeight}g</td>
              <td className="py-2 px-3 border">৳{parcel.deliveryCharge}</td>
              <td className="py-2 px-3 border">
                {new Date(parcel.createdAt).toLocaleDateString()}
              </td>
              <td className="py-2 px-3 border">
                <Link onClick={()=> handlePayment(parcel._id)} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Pay</Link>
              </td>
              <td className="py-2 px-3 border">
                <button onClick={()=>handleDelete(parcel._id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {parcels.length === 0 && (
            <tr>
              <td colSpan="8" className="text-center py-4 text-gray-500">
                No parcels found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ParcelTable;
