import React from "react";
import classes from './ActiveQuiz.module.css';
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => {
    const { answers } = props;
    const { ActiveQuiz, Question, QuestionNumber, QuestionText } = classes;

    return (
        <div className={ActiveQuiz}>
            <div className={Question}>
                <div>
                    <span className={QuestionNumber}>
                        1.
                    </span>
                    <span className={QuestionText}>
                        Как дела?
                    </span>
                </div>
                <div>
                    4/4
                </div>
            </div>

            <AnswersList
                answers={answers}
            />
        </div>
    )

}

export default ActiveQuiz;