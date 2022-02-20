import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import classes from './Quiz.module.css';

class Quiz extends Component {

    state = {
        results: {},
        isFinished: false,
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

    onAnswerClickHandler = answerId => {

        if (this.state.answerState) {
            //берем единственное значение для проверки, если success то выходим
            // что бы при двойном клике не пропускало следущий вопрос
            const values = Object.values(this.state.answerState)[0]
            if (values) {
                return;
            }

        }
        const question = this.state.quiz[this.state.activeQuestion];//текущий вопрос
        const results = this.state.results;


        if (question.rightAnsverId === answerId) {//проверяем правильный ли ответ

            if (!results[question.quizId]) {
                results[question.quizId] = 'success';
            }

            this.setState({
                answerState: {
                    [answerId]: 'success',
                },
                results
            })

        } else {

            results[question.quizId] = 'fail';
            this.setState({
                answerState: {
                    [answerId]: 'fail',
                },
                results
            })
        }

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
            window.clearTimeout(timeout);
        }, 500)
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    onRestartQuiz = () => {
        this.setState({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
        })
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
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRestartQuiz={this.onRestartQuiz}
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