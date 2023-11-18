import React, {useState} from 'react';
import Modal from "./Modal";
import $api from "../axiosConfig";

const AppendStatuteModal = ({isModal, onToggleModal}) => {
    const [title, setTitle] = useState('')
    const [img, setImg] = useState(null)
    const [file, setFile] = useState(null)

    const onSubmit = () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('file', file)
        formData.append('img', img)
        $api.post('/statutes', formData).then(() => {
            setTitle('')
            setImg(null)
            setFile(null)
            onToggleModal()
        })
    }

    return (
        <Modal isOpen={isModal} onClose={onToggleModal}>
            <div className={'w-[50vw] h-[60vh] m-2 bg-[#806933] flex justify-center font-Bebas_Neue'}>
                <form onSubmit={onSubmit} className={'flex flex-col m-10 border border-white p-5'}>
                    <p className={'text-center text-white text-3xl my-5'}>-- Доповнити статут --</p>
                    <div className={'flex flex-col justify-around h-[30vh]'}>
                        <p className={'text-xl text-white flex justify-between'}>Заголовок: <input className={'text-black'}
                                                                                               onChange={(e) => {
                                                                                                   setTitle(e.target.value)
                                                                                               }} required type="text"
                                                                                               name={'title'}
                                                                                               value={title}/></p>
                        <hr/>
                        <p className={'text-xl text-white flex justify-between'}>Файл: <input onChange={(e) => {
                            setFile(e.target.files[0])
                        }} required type="file" name={'file'}/></p>
                        <hr/>
                        <p className={'text-xl text-white flex justify-between'}>Картинка: <input onChange={(e) => {
                            setImg(e.target.files[0])
                        }} type="file" name={'img'}/></p>
                        <hr/>
                        <div className={'w-full flex justify-end'}>
                            <button type={"submit"}
                                    className={'hover:text-black hover:border-black p-2 border rounded text-white'}>Додати
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default AppendStatuteModal;