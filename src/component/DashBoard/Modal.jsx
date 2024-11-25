import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextApi } from '../ContextAPI/ContextApi';
const Modal = () => {
    const navigate = useNavigate();
    const{setSelectedproduct} = useContext(ContextApi)
    const purchase = () => {
        navigate("/");
        setSelectedproduct([]);
     }
    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
                <div className="modal-box bg-white text-black">
                    <h3 className="font-bold text-lg">Do you want to purchase all the items?</h3>
                    <div className="modal-action">
                    <button className="btn bg-green-600 text-black hover:text-white" onClick={()=>purchase()}>Yes</button>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            
                            <button className="btn bg-red-600 text-black hover:text-white">No</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;