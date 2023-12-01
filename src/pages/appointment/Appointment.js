import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='px-5 lg:px-12'>
            <AppointmentBanner date={date} setDate={setDate} />
            <AvailableAppointments date={date} />
        </div>
    );
};

export default Appointment;