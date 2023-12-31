import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, quod.',
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, quod.',
            location: 'California',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, quod.',
            location: 'California',
            img: people3
        },
    ]
    return (
        <section className='mt-28 px-5 lg:px-0'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-secondary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} alt='quote' className='w-24 lg:w-48' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review} />)
                }
            </div>
        </section>
    );
};

export default Testimonials;