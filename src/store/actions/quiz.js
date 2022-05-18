import axiosQuiz from "../../axios/axios-quiz";
import { FETCH_QUIZES_ERROR, FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS } from "./actionTypes";

export function fetchQuizes() {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const res = await axiosQuiz.get('/quizes.json');
            let quizes = [];

            Object.keys(res.data).forEach(key => {
                quizes.push({
                    id: key,
                    name: `${res.data[key][0].nameQuiz}`
                })
            })

            dispatch(fetchQuizesSuccess(quizes))

        } catch (error) {
            console.error(error);
            dispatch(fetchQuizesError(error))
        }
    }
}

export function fetchQuizesStart() {
    return {
        type: FETCH_QUIZES_START
    }
}

export function fetchQuizesSuccess(quizes) {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes
    }
}

export function fetchQuizesError(error) {
    return {
        type: FETCH_QUIZES_ERROR,
        error
    }
}