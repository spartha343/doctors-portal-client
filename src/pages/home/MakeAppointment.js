import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../../components/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center px-5 py-9 lg:py-0' style={{ backgroundImage: `url(${appointment})` }}>
            <div className='flex-1 hidden lg:block'>
                <img src={doctor} alt="" className='mt-[-150px]' />
            </div>
            <div className='flex-1 text-white'>
                <h3 className='text-secondary text-xl font-bold uppercase'>Appointment</h3>
                <h2 className='text-4xl my-6'>Make an Appointment Today</h2>
                <p className='mb-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur pariatur provident omnis repellat iure consectetur obcaecati ducimus totam? Inventore iste praesentium officia dolores eaque officiis, totam atque beatae omnis dolor quia et pariatur corporis repudiandae illo fugiat doloribus nihil mollitia.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;