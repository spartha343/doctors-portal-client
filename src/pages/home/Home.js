import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import ExceptionalCare from './ExceptionalCare';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div className='lg:px-12'>
            <Banner />
            <Info />
            <Services />
            <ExceptionalCare />
            <MakeAppointment />
            <Testimonials />
            <ContactUs />
        </div>
    );
};

export default Home;