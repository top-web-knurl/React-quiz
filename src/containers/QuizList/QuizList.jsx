import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from './QuizList.module.css'
class QuizList extends Component {

  renderQuizes() {
    return [1,2,3].map((quiz, index) => {
      return (
        <li 
        key={index}
        >
          <NavLink to={'/quiz/' + quiz}>
          Test {index}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    const { QuizList, QuizListWrapper } = classes;
    return (
      <div className={QuizList}>
        <div className={QuizListWrapper}>
        <h1>Список тестов</h1>
        <ul>
          {this.renderQuizes()}
        </ul>
        </div>
      </div>
    );
  }
}

export default QuizList;
