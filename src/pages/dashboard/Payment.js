import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
    const { id } = useParams();
    const url = `https://doctors-portal-server-taupe-six.vercel.app/booking/${id}`;
    const { data: appointment, isLoading } = useQuery({
        queryKey: ['booking', id],
        queryFn: () => fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    });
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success font-bold'>Hello, {appointment.patientName}</p>
                    <h2 className="card-title">Please Pay for {appointment.treatment}</h2>
                    <p>Your appointment: <span className='text-secondary'>{appointment.date}</span> at {appointment.slot}</p>
                    <p>Please Pay: ${appointment.price}</p>
                </div>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;