import {combineReducers} from 'redux';
import authReduser from './autch';
import quizReducer from './quiz';


export default combineReducers({
    quiz: quizReducer,
    auth: authReduser
});