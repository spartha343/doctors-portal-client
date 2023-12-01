import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../../components/PrimaryButton';

const ExceptionalCare = () => {
    return (
        <div className='hero min-h-screen my-36'>
            <div className="hero-content flex-col lg:flex-row">
                <div className='flex justify-center'>
                    <img src={treatment} alt='chair' className="w-auto md:max-w-md rounded-lg shadow-2xl lg:mr-24 lg:w-[458px] lg:h-[576px]" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate suscipit inventore explicabo incidunt tenetur aliquid, a eveniet, illo quod qui obcaecati necessitatibus autem iste fuga iusto quos quisquam voluptates minima repudiandae earum! Deleniti eligendi officiis debitis laudantium consequuntur vel perferendis, totam delectus optio accusantium illo ab. Laudantium optio illo ea maxime accusantium quo ducimus</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCare;