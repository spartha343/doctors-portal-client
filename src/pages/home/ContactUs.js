import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../../components/PrimaryButton';

const ContactUs = () => {
    return (
        <section className='mt-36 py-9' style={{ backgroundImage: `url(${appointment})` }}>
            <div className='text-center'>
                <h4 className='text-xl text-secondary font-bold'>Contact Us</h4>
                <h2 className='text-3xl text-white'>Stay Connected With Us</h2>
            </div>

            <div className="hero">
                <div className="hero-content flex-col min-w-full">
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl">
                        <form className="card-body">
                            <div className="form-control mb-5">
                                <input type="email" placeholder="Email Address" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-5">
                                <input type="text" placeholder="Subject" className="input input-bordered" required />
                            </div>
                            <textarea className="textarea h-28" placeholder="Your Message"></textarea>
                            <div className='flex justify-center mt-6'>
                                <PrimaryButton>Submit</PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;