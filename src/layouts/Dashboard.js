import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer lg:drawer-open">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center min-h-screen">
                {/* Page content here */}
                <h2 className='text-5xl text-secondary'>Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='/dashboard/review'>My Reviews</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/users'>All users</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                        <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;