import React from 'react';
import Modal from "./Modal";
import EditStatute from "./EditStatute";

const EditModal = ({onToggleEdit, isEdit, statutes, fetch}) => {
    return (
        <Modal onClose={onToggleEdit} isOpen={isEdit}>
            <div className={'w-[50vw] h-[60vh] m-2 bg-[#806933] flex justify-center font-Bebas_Neue'}>
                <div
                    className={'flex flex-col m-10 border border-white p-5 w-[40vw] h-[50vh] overflow-y-auto overscroll-y-auto'}>
                    {statutes.map((stat, ind) => {
                        return (
                            <EditStatute fetch={fetch} statute={stat} onToggleEdit={onToggleEdit}/>
                        )
                    })}

                </div>
            </div>
        </Modal>
    );
};

export default EditModal;