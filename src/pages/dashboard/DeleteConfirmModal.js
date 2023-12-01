import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, setDeletingDoctor, refetch }) => {
    const { name, email } = deletingDoctor;
    const handleDelete = () => {
        fetch(`https://doctors-portal-server-taupe-six.vercel.app/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} is deleted.`);
                    setDeletingDoctor(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <dialog id="delete-confirm-modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hey!</h3>
                    <p className="py-4">Are you sure you want to delete "{name}"?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-error mr-3" onClick={() => handleDelete()}>Delete</button>
                            <button className="btn btn-sm">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default DeleteConfirmModal;