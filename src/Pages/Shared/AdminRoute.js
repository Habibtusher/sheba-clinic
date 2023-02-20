import React from 'react';
import { useContext } from 'react';
import { useLocation,Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loading from './Loading';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin,isAdminLoading]=useAdmin(user?.email)
    const location = useLocation();
    if (loading || isAdminLoading) {
      return <Loading/>
    }
    if (user && isAdmin) {
      return children;
    }
    return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;