import axios from "../../axios/axios-quiz";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import classes from './QuizList.module.css';

class QuizList extends Component {

  state = {
    quizes: [],
    loading: true
  }

  renderQuizes() {

    return this.state.quizes.map((quiz, index) => {

      return (
        <li
          key={quiz.id}
        >
          <NavLink to={'/quiz/' + quiz.id}>
            {quiz.name}
          </NavLink>

        </li>
      )
    })
  }

  // componentDidMount() вызывается сразу после монтирования
  // (то есть, вставки компонента в DOM). В этом методе должны
  // происходить действия, которые требуют наличия DOM-узлов.
  //  Это хорошее место для создания сетевых запросов.
  // для работы с беком дом дерево должно быть уже отрисовано
  async componentDidMount() {

    try {
      const res = await axios.get('/quizes.json');
      let quizes = [];

      Object.keys(res.data).forEach(key => {
        quizes.push({
          id: key,
          name: `${res.data[key][0].nameQuiz}`
        })
      })

      this.setState({
        quizes,
        loading: false
      })

    } catch (e) {
      console.log(e);
    }

  }
  render() {
    const { QuizList, QuizListWrapper } = classes;

    return (
      <div className={QuizList}>
        <div className={QuizListWrapper}>
          <h1>Список тестов</h1>
          <hr />
          {this.state.loading
          ? <Loader/>
          :<ol>
            {this.renderQuizes()}
          </ol>
          }
          
        </div>
      </div>
    );
  }
}

export default QuizList;
