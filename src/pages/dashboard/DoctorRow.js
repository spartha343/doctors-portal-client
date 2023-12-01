import React from 'react';

const DoctorRow = ({ doctor, idx, refetch, setDeletingDoctor }) => {
    const { name, specialty, img } = doctor;
    const openConfirmationModal = () => {
        setDeletingDoctor(doctor);
        document.getElementById('delete-confirm-modal')?.showModal();
    }
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-20 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <button className="btn btn-xs btn-error" onClick={openConfirmationModal}>Delete</button>
            </td>
        </tr>
    );
};

export default DoctorRow;