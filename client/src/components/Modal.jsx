import React from "react";

function Modal({isOpen, onClose, children}) {
    return (
        <div
            className={`${
                isOpen ? "block" : "hidden"
            } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50`}
        >
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;