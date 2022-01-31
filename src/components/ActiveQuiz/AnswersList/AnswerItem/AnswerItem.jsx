import React from "react";
import classes from './AnswerItem.module.css';
import './AnswerItem.module.css'
const AnswersItem = props => {

    const { AnswerItem } = classes;
    const { answer, onAnswerClick, state } = props;
    const cls = [AnswerItem];

    if(state){
        cls.push(classes[state])
    }
    
    return (
        <li 
        className={cls.join(' ')}
        onClick={() => onAnswerClick(answer.id)}
        >
            { answer.text }
        </li>
    )

}

export default AnswersItem;