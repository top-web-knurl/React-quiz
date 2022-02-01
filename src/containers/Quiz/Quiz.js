import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import classes from './Quiz.module.css';

class Quiz extends Component {

    state = {
        isFinished: true,
        activeQuestion: 0,
        answerState: null, //информация о текущем клике пользователя
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
        if (this.state.answerState) {
            //берем единственное значение для проверки, если succsess то выходим
            // что бы при двойном клике не пропускало следущий вопрос
            const key = Object.values(this.state.answerState)[0];

            if (key === 'succsess') {
                return
            }

        }
        const question = this.state.quiz[this.state.activeQuestion]//текущий вопрос
        if (question.rightAnsverId === answerId) {//проверяем правильный ли ответ
            this.setState({
                answerState: { [answerId]: 'succsess' }
            })
            const timeout = window.setTimeout(() => {

                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true,
                    })
                } else {

                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })

                }
                window.clearTimeout(timeout)
            }, 950)

        } else {
            this.setState({
                answerState: { [answerId]: 'fail' }
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        const { Quiz, QuizWrapper } = classes;

        return (
            <div className={Quiz}>

                <div className={QuizWrapper}>
                    <h1>Как хорошо ты знаешь "черепашек нинздзя"</h1>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz

                            />
                            : <ActiveQuiz
                                onAnswerClick={this.onAnswerClickHandler}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }

                </div>
            </div>
        )
    }
}

export default Quiz;