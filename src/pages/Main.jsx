import React, {useEffect} from 'react';
import TransactionInfo from "../components/TransactionInfo";
import LoginData from "../components/LoginData";
import SettingsData from "../components/SettingsData";
import {useDispatch, useSelector} from "react-redux";
import {ActionCreators} from "../store/reducers/main/action-creators";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const Main = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.main.isLoading)
    const error = useSelector(state => state.main.error)
    const  main = useSelector(state => state.main.main)

    useEffect(() => {
        dispatch(ActionCreators.getMain())

    }, [])

    if (error) {
        return <ErrorMessage error={error}/>
    }
    return <>
        {
            isLoading ?
                <Loader/>
                :
                <>
                    <TransactionInfo text={main.text}/>
                    <LoginData/>
                    <SettingsData/>
                </>
        }

    </>
};

export default Main;