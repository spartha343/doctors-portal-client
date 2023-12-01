import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    const handleBookingModal = async () => {
        await setTreatment(service);
        document.getElementById('booking-modal')?.showModal();
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold text-secondary text-center">{name}</h2>
                <p>
                    {
                        slots.length > 0 ?
                            <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <button
                        className={`btn btn-sm text-white ${slots.length > 0 && 'bg-gradient-to-r from-secondary to-primary'}`}
                        onClick={handleBookingModal}
                        disabled={slots.length === 0}
                    >Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;