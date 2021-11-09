import {SET_ERROR, SET_LOADING, SET_MAIN} from "./main-reducer";
import axios from "axios";

export const ActionCreators = {
    setMain: (data) => ({type: SET_MAIN, payload: data}),

    setIsLoading: (bool) => ({type: SET_LOADING, payload: bool}),
    setError: (str) => ({type: SET_ERROR, payload: str}),
    getMain: () => async (dispatch) => {
        try {
            setTimeout(async () => {
                const response = await axios.get('./data.json')
                dispatch(ActionCreators.setMain(response.data.main))
            }, 1000)

        } catch (e) {
            dispatch(ActionCreators.setError('Произошла ошибка при получении данных для Main'))
            dispatch(ActionCreators.setIsLoading(false))
        }
    }
}