import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import DoctorRow from './DoctorRow';
import DeleteConfirmModal from './DeleteConfirmModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: () => fetch('https://doctors-portal-server-taupe-six.vercel.app/doctor', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    });

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='w-11/12'>
            <h2 className='text-2xl'>Manage Doctors: {doctors.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, idx) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                idx={idx}
                                refetch={refetch}
                                setDeletingDoctor={setDeletingDoctor} />)
                        }
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <DeleteConfirmModal deletingDoctor={deletingDoctor} setDeletingDoctor={setDeletingDoctor} refetch={refetch} />}
        </div>
    );
};

export default ManageDoctors;