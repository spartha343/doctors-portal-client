import { format } from 'date-fns';
import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots, price } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formatedDate = format(date, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        console.log(slot);
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('https://doctors-portal-server-taupe-six.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set for ${formatedDate} at ${slot}`);
                }
                else {
                    toast.error(`You already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`);
                }
                refetch();
                // to close the modal
                setTreatment(null);
            })
    }
    return (
        <div>
            <dialog id="booking-modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-semibold text-lg text-secondary">Booking for: {name}</h3>
                    <div className="modal-action">
                        <form method="dialog" onSubmit={handleBooking} className='w-full grid grid-cols-1 gap-5'>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full" />
                            <select name='slot' className="select select-bordered w-full">
                                {
                                    slots.map((slot, idx) => <option value={slot} key={idx}>{slot}</option>)
                                }
                            </select>
                            <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full" />
                            <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full" />
                            <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full" />
                            <input type="submit" value="Submit" className="btn btn-secondary w-full" />
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default BookingModal;