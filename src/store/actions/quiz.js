import axiosQuiz from "../../axios/axios-quiz";
import { FETCH_QUIZES_ERROR, FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS, FETCH_QUIZ_SUCCESS, FINISH_QUIZ, NEXT_QUIZ_QUESTION, QUIZ_SET_STATE, RESTART_QUIZ } from "./actionTypes";


export function fetchQuizById(quizId) {
    return async dispatch => {
        dispatch(fetchQuizesStart())

        try {
            const response = await axiosQuiz.get(`/quizes/${quizId}.json`)
            const quiz = response.data

            dispatch(fetchQuizSuccess(quiz))
        } catch (e) {
            dispatch(fetchQuizesError(e))
        }
    }
}

export function fetchQuizSuccess(quiz) {
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz
    }
}

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

export function quizSetState(answerState, results) {
    return {
        type: QUIZ_SET_STATE,
        answerState,
        results
    }
}
export function finishQuiz() {
    return {
        type: FINISH_QUIZ,
    }
}
export function restartQuiz() {
    return {
        type: RESTART_QUIZ,
    }
}
export function quizNextQuestion(number) {
    return {
        type: NEXT_QUIZ_QUESTION,
        number
    }
}

export function quizAnswerClick(answerId) {
    return (dispatch, getState) => {
        const state = getState().quiz;
        if (state.answerState) {
            //берем единственное значение для проверки, если оно уже есть то выходим
            // что бы при двойном клике не пропускало следущий вопрос
            const values = Object.values(state.answerState)[0]
            if (values) {
                return;
            }
        }

        const question = state.quiz[state.activeQuestion];//текущий вопрос
        const results = state.results;

        if (question.rightAnsverId === answerId) {//проверяем правильный ли ответ
            if (!results[question.quizId]) {
                results[question.quizId] = 'success';
            }
            dispatch(quizSetState({ [answerId]: 'success' }, results));
        } else {
            results[question.quizId] = 'fail';
            dispatch(quizSetState({ [answerId]: 'fail' }, results));
        }
        const timeout = window.setTimeout(() => {
            if (isQuizFinished(state)) {
                dispatch(finishQuiz())
            } else {
                dispatch(quizNextQuestion(state.activeQuestion + 1));
            }
            window.clearTimeout(timeout);
        }, 500);
    }
}

export function  isQuizFinished(state) {
    return state.activeQuestion + 1 === state.quiz.length
}