import { format } from 'date-fns';
import React, { useState } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';

const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery({
        queryKey: ['available', formatedDate],
        queryFn: () => fetch(`https://doctors-portal-server-taupe-six.vercel.app/available?date=${formatedDate}`).then(res => res.json())
    });

    if (isLoading) {
        return <Loading />
    }

    // useEffect(() => {
    //     fetch(`https://doctors-portal-server-taupe-six.vercel.app/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formatedDate]);

    return (
        <div>
            <p className='text-xl text-center text-secondary'>Available appointments on {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        setTreatment={setTreatment}
                        service={service}
                    />)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            />}
        </div>
    );
};

export default AvailableAppointments;