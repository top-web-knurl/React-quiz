import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import classes from './Quiz.module.css';
import { useParams } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import { connect } from "react-redux";
import { fetchQuizById, quizAnswerClick, restartQuiz } from "../../store/actions/quiz";

export function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class Quiz extends Component {

    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id);
    }

    componentWillMount() {
        this.props.restartQuiz()
    }
    
    render() {
        const { Quiz, QuizWrapper } = classes;
        const { loading, quiz, isFinished, activeQuestion, results, answerState, quizAnswerClick,restartQuiz} = this.props;
        return (
            <div className={Quiz}>
                <div className={QuizWrapper}>
                    {
                    loading || !quiz
                    ? <Loader />
                    :
                    <>
                        <h1>{quiz[activeQuestion].nameQuiz}</h1>
                        {
                            isFinished
                                ? <FinishedQuiz
                                    results={results}
                                    quiz={quiz}
                                    onRestartQuiz={restartQuiz}
                                />
                                : <ActiveQuiz
                                    onAnswerClick={quizAnswerClick}
                                    question={quiz[activeQuestion].question}
                                    answers={quiz[activeQuestion].answers}
                                    quizLength={quiz.length}
                                    answerNumber={activeQuestion + 1}
                                    state={answerState}
                                />
                        }
                    </>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        results: state.quiz.results,
        isFinished: state.quiz.isFinished,
        activeQuestion: state.quiz.activeQuestion,
        answerState: state.quiz.answerState,
        quiz: state.quiz.quiz,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
        restartQuiz: () => dispatch(restartQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Quiz));