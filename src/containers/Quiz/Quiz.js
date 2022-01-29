import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import classes from './Quiz.module.css';

class Quiz extends Component {

    state = {
        quiz: []
    }

    render() {
        const { Quiz, QuizWrapper } = classes;
        return (
            <div className={Quiz}>
              
                <div className={QuizWrapper}>
                <h1>Quiz</h1>
                    <ActiveQuiz />
                </div>
            </div>
        )
    }
}

export default Quiz;