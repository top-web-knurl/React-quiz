import React from "react";
import classes from './ActiveQuiz.module.css';
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => {
    const { answers, question, onAnswerClick } = props;
    const { ActiveQuiz, Question, QuestionNumber, QuestionText } = classes;

    return (
        <div className={ActiveQuiz}>
            <div className={Question}>
                <div>
                    <span className={QuestionNumber}>
                        1.
                    </span>
                    <span className={QuestionText}>
                        {question}
                    </span>
                </div>
                <div>
                    4/4
                </div>
            </div>

            <AnswersList
                onAnswerClick={onAnswerClick}
                answers={answers}
            />
        </div>
    )

}

export default ActiveQuiz;