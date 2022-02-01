import React from "react";
import classes from './FinishedQuiz.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
const FinishedQuiz = props => {

    const { FinishedQuiz, succsess, fail } = classes;

    return (
        <div className={FinishedQuiz}>
            <ul>
                <li className={succsess}>
                    <strong>1. </strong>
                    Временный текст
                    <FontAwesomeIcon icon={faCheck} size="lg" />
                </li>
                <li className={fail}>
                    <strong>2. </strong>
                    Временный текст
                    <FontAwesomeIcon icon={faTimes} spin size="lg" />
                </li>
            </ul>

            <h3>
                Правильно 2 из 8
            </h3>

            <nav>
                <button>Повторить</button>
            </nav>
        </div>
    )

}

export default FinishedQuiz;