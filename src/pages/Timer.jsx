import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ActionCreators} from "../store/reducers/main/action-creators";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import TransactionInfo from "../components/TransactionInfo";
import LoginData from "../components/LoginData";
import SettingsData from "../components/SettingsData";

const Timer = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.main.isLoading)
    const error = useSelector(state => state.main.error)

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
                    <TransactionInfo
                        text='Idea take you, find anyone occur avoids in undertakes, rejects rationally builder pursues.
                         Has actual born no born occur, encounter born, desires one are who.'
                    />
                    <LoginData/>
                    <SettingsData/>
                </>
        }

    </>
};

export default Timer;