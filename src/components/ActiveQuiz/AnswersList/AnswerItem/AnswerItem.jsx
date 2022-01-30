import React from "react";
import classes from './AnswerItem.module.css';
import './AnswerItem.module.css'
const AnswersItem = props => {
    const { AnswerItem } = classes;
    const { answer, onAnswerClick } = props;
    return (
        <li 
        className={ AnswerItem }
        onClick={() => onAnswerClick(answer.id)}
        >
            { answer.text }
        </li>
    )

}

export default AnswersItem;