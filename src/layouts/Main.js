import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-[1366px] mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;