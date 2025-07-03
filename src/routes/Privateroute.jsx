import React from 'react';
import useAuth from '../hook/useAuth';
import { useLocation } from 'react-router';
import Loading from '../components/Loading';

const Privateroute = ({Children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <Loading/>;
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return Children;
};

export default Privateroute;