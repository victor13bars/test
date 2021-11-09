import {SET_ERROR, SET_LOADING, SET_MAIN} from "./main-reducer";

const data = require('../../../dataOnServer/data.json')

export const ActionCreators = {
    setMain: (data) => ({type: SET_MAIN, payload: data}),

    setIsLoading: (bool) => ({type: SET_LOADING, payload: bool}),
    setError: (str) => ({type: SET_ERROR, payload: str}),
    getMain: () => async (dispatch) => {
        try {
            const response = await new Promise(resolve => {
                setTimeout(() => resolve(data), 1000)
            })

            dispatch(ActionCreators.setMain(response.main))

        } catch (e) {
            dispatch(ActionCreators.setError('Произошла ошибка при получении данных для Main'))
            dispatch(ActionCreators.setIsLoading(false))
        }
    }
}