import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import classes from './Quiz.module.css';

class Quiz extends Component {

    state = {
        quiz: [
            {
                question: 'Как бы ты назвал свою домашнюю черепашку?',
                rightAnsverId: 3,
                answers: [
                    { text: 'Леонардо', id: 1 },
                    { text: 'Рафаэль', id: 2 },
                    { text: 'Микилянджело', id: 3 },
                    { text: 'Донатело', id: 4 },
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log(answerId);
    }
    render() {
        const { Quiz, QuizWrapper } = classes;
        return (
            <div className={Quiz}>

                <div className={QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                    onAnswerClick={this.onAnswerClickHandler}
                        question={this.state.quiz[0].question}
                        answers={this.state.quiz[0].answers} />
                </div>
            </div>
        )
    }
}

export default Quiz;