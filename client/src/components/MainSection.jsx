import React from 'react';

const MainSection = ({statutes, isLoading}) => {

    const handleDownload = (fileSrc) => {
        window.location.href = `http://localhost:1488/api/statutes/file/${fileSrc}`;
    };

    return (
        <div className={'w-screen min-h-screen h-full bg-gray-300 font-Bebas_Neue'}>
            {isLoading ? <span className={'w-full text-center'}>'Завантаження...' </span> :
                <div className={'w-full h-full flex flex-wrap justify-between'}>
                    {statutes.map((stat, ind) => {
                        return (
                            <div
                                key={ind}
                                className={'w-[15vw]  h-[40vh] bg-gray-200 m-5 flex flex-col'}>

                                <img className={'w-full h-full p-4'}
                                     src={`http://localhost:1488/api/statutes/img/${stat.imgSrc}`} alt=""/>
                                <span className={'text-center'}>{stat.title}</span>
                                <button onClick={() => handleDownload(stat.fileSrc)}
                                        className={'p-2 border hover:bg-[#706233] hover:text-white'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-download inline mx-1" viewBox="0 0 16 16">
                                        <path
                                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                        <path
                                            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                    </svg>
                                    Скачати
                                </button>
                            </div>
                        )
                    })}

                </div>
            }
        </div>
    );
};

export default MainSection;