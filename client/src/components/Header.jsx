import React from 'react';

const Header = ({onToggleModal, onToggleEdit}) => {
    return (
        <>
            <div className="w-screen h-[12vh] bg-[#706233] font-Bebas_Neue text-center text-4xl p-5 text-white">
                <span>Statutes of the Armed Forces of Ukraine</span>
            </div>
            <div
                className="w-screen h-[8vh] bg-[#806933] text-center font-Bebas_Neue text-white flex flex-col justify-center">
                <div>
                    <button className={'m-2 p-2 border rounded hover:bg-[#706233] hover:text-gray-700'}>Головна</button>
                    <button onClick={onToggleModal}
                            className={'m-2 p-2 border rounded hover:bg-[#706233] hover:text-gray-700'}>Додати статут
                    </button>
                    <button onClick={onToggleEdit} className={'m-2 p-2 border rounded hover:bg-[#706233] hover:text-gray-700'}>Редагування
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;