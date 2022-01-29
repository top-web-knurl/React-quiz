import React from "react";
import classes from './AnswerItem.module.css';
import './AnswerItem.module.css'
const AnswersItem = props => {
    const { AnswerItem } = classes;
    const { answer } = props;
    return (
        <li className={ AnswerItem }>
            { answer.text }
        </li>
    )

}

export default AnswersItem;