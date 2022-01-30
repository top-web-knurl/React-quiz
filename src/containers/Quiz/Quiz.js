import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import classes from './Quiz.module.css';

class Quiz extends Component {

    state = {
        activeQuestion: 0,
        quiz: [
            {
                quizId: 1,
                question: 'Выбери лишнюю черепашку',
                rightAnsverId: 2,
                answers: [
                    { text: 'Леонардо', id: 1 },
                    { text: 'Рафаэлло', id: 2 },
                    { text: 'Микилянджело', id: 3 },
                    { text: 'Донатело', id: 4 },
                ]
            },
            {
                quizId: 2,
                question: 'Как звали учителя(сенсея) черепашек-ниндзя?',
                rightAnsverId: 4,
                answers: [
                    { text: 'Сплин', id: 1 },
                    { text: 'Спилтер', id: 2 },
                    { text: 'Спилберг', id: 3 },
                    { text: 'Сплинтер', id: 4 },
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }
    
    render() {
        const { Quiz, QuizWrapper } = classes;
        return (
            <div className={Quiz}>

                <div className={QuizWrapper}>
                    <h1>Как хорошо ты знаешь "черепашек нинздзя"</h1>
                    <ActiveQuiz
                        onAnswerClick={this.onAnswerClickHandler}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;