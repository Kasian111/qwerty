import './App.css';
import Header from "./components/Header";
import {useEffect, useState} from "react";
import AppendStatuteModal from "./components/AppendStatuteModal";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import $api from "./axiosConfig";
import EditModal from "./components/EditModal";

function App() {
    const [isModal, setIsModal] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [statutes, setStatutes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const onToggleLoading = () => setIsLoading(!isLoading)
    const onToggleEdit = () => setIsEdit(!isEdit)

    const fetchData = async () => {
        try {
            setStatutes((await $api.get('/statutes')).data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData().then(onToggleLoading)
    }, [])

    const onToggleModal = () => setIsModal(!isModal)
    return (
        <>
            <Header onToggleModal={onToggleModal} onToggleEdit={onToggleEdit}/>
            <AppendStatuteModal isModal={isModal} onToggleModal={onToggleModal}/>
            <EditModal isEdit={isEdit} onToggleEdit={onToggleEdit} statutes={statutes} fetch={fetchData}/>
            <MainSection statutes={statutes} isLoading={isLoading}/>
            <Footer/>
        </>
    );
}

export default App;
