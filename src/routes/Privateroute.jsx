import React from 'react';
import useAuth from '../hook/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const Privateroute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <Loading/>;
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location.pathname }} />;
    }

    return children;
};

export default Privateroute;