import React from "react";
import classes from './ActiveQuiz.module.css';

const ActiveQuiz = (props) => {
    // const {ActiveQuiz} = props;
    const { ActiveQuiz, Question } = classes;

    return (
        <div className={ActiveQuiz}>
            <div className={Question}>
                <div>
                    <span>
                        1.&nbsp;
                    </span>
                    <span>
                        Как дела?
                    </span>
                </div>
                <div>
                    4/4
                </div>
            </div>

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )

}

export default ActiveQuiz;