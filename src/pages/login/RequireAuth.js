import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../shared/Loading';

const RequireAuth = ({ children }) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;