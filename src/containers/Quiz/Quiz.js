import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import classes from './Quiz.module.css';
import axios from "../../axios/axios-quiz";
import { useParams } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";

export function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}
class Quiz extends Component {

    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null, //информация о текущем клике пользователя
        quiz: [
        ],
        loading: true
    }

    onAnswerClickHandler = answerId => {

        if (this.state.answerState) {
            //берем единственное значение для проверки, если оно уже есть то выходим
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
    async componentDidMount() {
        const { match } = this.props;
        try {
            const response = await axios.get(`/quizes/${match.params.id}.json`);
            const quiz = response.data;
            this.setState({
                quiz,
                loading: false
            })
        } catch (e) {
            console.warn(e);
        }

    }
  
    render() {
        const { Quiz, QuizWrapper } = classes;

        return (
            <div className={Quiz}>
                <div className={QuizWrapper}>
                    {
                        this.state.loading ? <Loader />
                            :
                            <>
                                <h1>{this.state.quiz[this.state.activeQuestion].nameQuiz}</h1>
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
                            </>
                    }

                </div>
            </div>
        )
    }
}

export default withRouter(Quiz);