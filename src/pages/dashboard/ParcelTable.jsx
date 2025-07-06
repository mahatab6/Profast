import React from 'react';

const ParcelTable = ({ parcels }) => {
  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Sender Parcels</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-3 border">Tracking ID</th>
            <th className="py-2 px-3 border">Sender</th>
            <th className="py-2 px-3 border">Receiver</th>
            <th className="py-2 px-3 border">Parcel Type</th>
            <th className="py-2 px-3 border">Weight</th>
            <th className="py-2 px-3 border">Charge</th>
            <th className="py-2 px-3 border">Created</th>
            <th className="py-2 px-3 border">Action</th>
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
              <td className="py-2 px-3 border">{parcel.parcelType}</td>
              <td className="py-2 px-3 border">{parcel.parcelWeight}g</td>
              <td className="py-2 px-3 border">৳{parcel.deliveryCharge}</td>
              <td className="py-2 px-3 border">
                {new Date(parcel.createdAt).toLocaleDateString()}
              </td>
              <td className="py-2 px-3 border">
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Pay
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
