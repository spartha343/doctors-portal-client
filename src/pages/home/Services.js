import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nihil facere.',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nihil facere.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nihil facere.',
            img: whitening
        },
    ];
    return (
        <div className='mt-32'>
            <div className='text-center'>
                <h3 className='text-secondary text-xl font-bold uppercase'>Our services</h3>
                <h2 className='text-4xl mb-16'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 px-5'>
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;