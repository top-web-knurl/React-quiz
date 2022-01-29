import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import classes from './Quiz.module.css';

class Quiz extends Component {

    state = {
        quiz: [
            {
                answers: [
                    {text: 'Вопрос 1'},
                    {text: 'Вопрос 2'},
                    {text: 'Вопрос 3'},
                    {text: 'Вопрос ?'},
                ]
            }
        ]
    }

    render() {
        const { Quiz, QuizWrapper } = classes;
        return (
            <div className={Quiz}>
              
                <div className={QuizWrapper}>
                <h1>Кто ты из черепашек-ниндзя?</h1>
                    <ActiveQuiz answers={this.state.quiz[0].answers}/>
                </div>
            </div>
        )
    }
}

export default Quiz;