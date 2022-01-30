import React from "react";
import classes from './ActiveQuiz.module.css';
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => {
    const { answers, question, onAnswerClick, quizLength, answerNumber, state } = props;
    const { ActiveQuiz, Question, QuestionNumber, QuestionText } = classes;

    return (
        <div className={ActiveQuiz}>
            <div className={Question}>
                <div>
                    <span className={QuestionNumber}>
                        {answerNumber}.
                    </span>
                    <span className={QuestionText}>
                        {question}
                    </span>
                </div>
                <div>
                    {answerNumber}/{quizLength}
                </div>
            </div>

            <AnswersList
                onAnswerClick={onAnswerClick}
                answers={answers}
                state={state}
            />
        </div>
    )

}

export default ActiveQuiz;