import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ActionCreators} from "../store/reducers/main/action-creators";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import TransactionInfo from "../components/TransactionInfo";
import LoginData from "../components/LoginData";
import SettingsData from "../components/SettingsData";

const MapSettings = () => {
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
                        text='Not expound again not example, ever builder of will ever.
                        Do expound all happiness know, are is are produces do advantage, all some toil rejects was.
                        Mistaken, extremely has avoids pursue actual toil annoying, actual or with - laborious has, explain annoying rejects.'
                    />
                    <LoginData/>
                    <SettingsData/>
                </>
        }

    </>
};

export default MapSettings;