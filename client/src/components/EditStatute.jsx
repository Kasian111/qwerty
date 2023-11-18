import React, {useState} from 'react';
import $api from "../axiosConfig";

const EditStatute = ({statute, onToggleEdit, fetch}) => {
    const [stat, setStat] = useState(statute)

    const onChangeInput = (e) => {
        const {name, value} = e.target
        setStat({...stat, [name]: value})
    }

    const deleteStatute = async () => {
        try {
            await $api.delete(`/statutes/${stat._id}`)
            fetch()
            onToggleEdit()
        } catch (err) {
            console.log(err)
        }
    }

    const updateStatute = async () => {
        try {
            await $api.put('/statutes', {statute: stat})
            fetch()
            onToggleEdit()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <p className={'p-2 border text-xl m-2 flex justify-between text-white'}>
            Title: <input className={'text-black'} onChange={onChangeInput} type={"text"} name={'title'}
                          value={stat.title}/>
            <div>
                <button onClick={updateStatute}
                        className={'p-1 px-2 rounded border mx-4 hover:text-black hover:border-black'}>Edit
                </button>
                <button onClick={deleteStatute}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-trash inline hover:text-black"
                         viewBox="0 0 16 16">
                        <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                        <path
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                    </svg>
                </button>
            </div>

        </p>
    );
};

export default EditStatute;