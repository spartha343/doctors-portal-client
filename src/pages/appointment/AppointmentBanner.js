import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const AppointmentBanner = ({ date, setDate }) => {
    let footer = <p className='font-semibold'>Please pick a day.</p>;
    if (date) {
        footer = <p className='font-semibold'>The selected date is <span className='text-secondary'>{format(date, 'PP')}</span>.</p>;
    }

    const css = `
  .my-selected:not([disabled]) { 
    color: white;
    background: #19D3AE;
  }
  .my-selected:hover:not([disabled]) { 
    color: #19D3AE;
  }
  .my-today { 
    color: #19D3AE;
  }
`;
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse justify-evenly w-full">
                <div>
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
                </div>
                <div>
                    <style>{css}</style>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        modifiersClassNames={{
                            selected: 'my-selected',
                            today: 'my-today'
                        }}
                        footer={footer}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;