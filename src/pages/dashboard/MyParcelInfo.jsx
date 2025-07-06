import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../hook/useAuth';
import useAxiosSecure from '../../hook/useAxiosSecure';
import ParcelTable from './ParcelTable';
import Loading from '../../components/Loading';

const MyParcelInfo = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: parcels =[], isLoading} = useQuery({
        queryKey: ['my-parcel', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/parcels-info?email=${user?.email}`)
            return res.data;
        }
    })


    if(isLoading){
        return <Loading/>
    }
    return (
        <div className="p-4">
            <ParcelTable parcels={parcels} />
        </div>
    );
};

export default MyParcelInfo;