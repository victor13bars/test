import React, {useEffect} from 'react';
import TransactionInfo from "../components/TransactionInfo";
import LoginData from "../components/LoginData";
import SettingsData from "../components/SettingsData";
import {ActionCreators} from "../store/reducers/main/action-creators";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import {useDispatch, useSelector} from "react-redux";

const Setting = () => {
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
                        text='Has a idea pursue to, expound which, pursues expound toil idea the explorer idea denouncing loves.
                        Circumstances rationally to and teachings denouncing explain undertakes happiness resultant who builder you truth complete.
                        Physical man builder one enjoy trivial circumstances to has pursue advantage.'
                    />
                    <LoginData/>
                    <SettingsData/>
                </>
        }

    </>
};

export default Setting;