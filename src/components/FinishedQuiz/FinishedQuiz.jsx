import React from "react";
import classes from './FinishedQuiz.module.css';
import Button from "../UI/Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const FinishedQuiz = props => {
    const { results, quiz, onRestartQuiz } = props;
    const { FinishedQuiz, success, fail } = classes;
    const successCount = Object.keys(results).reduce((total, key) => {
        if (results[key] === 'success') {
            total++;
        }
        return total;
    }, 0)

    return (
        <div className={FinishedQuiz}>
            <ul>
                {quiz.map((quizItem, index) => {
                    let flagResult = results[quizItem.quizId] === 'fail' ? false : true
                    return (

                        <li key={index} className={flagResult ? success : fail}>
                            <strong>{index + 1}.</strong>
                            <span>{quizItem.question}</span>
                            <FontAwesomeIcon
                                icon={flagResult ? faCheck : faTimes}
                                size="lg"
                                spin={!flagResult}
                            />
                        </li>
                    )
                })}
            </ul>

            <h3>
                Правильно {successCount} из {quiz.length}
            </h3>

            <nav>
                <Button onClick={onRestartQuiz}>Повторить</Button>
                <Link to='/'><Button>Перейти в список тестов</Button></Link>
            </nav>
        </div>
    )

}

export default FinishedQuiz;