import React from "react";
import classes from './AnswersList.module.css';
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => {
    const { AnswersList } = classes;
    const { answers, onAnswerClick, state } = props;
    return (
        <ul className={AnswersList}>
            {answers.map((answer, index) => {
                return (
                    <AnswerItem
                        key={index}
                        answer={answer}
                        onAnswerClick={onAnswerClick}
                        state={state ? state[answer.id] : null}
                    />
                )
            })}
        </ul>
    )

}

export default AnswersList;