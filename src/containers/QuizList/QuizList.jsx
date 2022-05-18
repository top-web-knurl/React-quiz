import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import classes from './QuizList.module.css';
import { connect } from "react-redux";
import { fetchQuizes } from "../../store/actions/quiz";

class QuizList extends Component {

  renderQuizes() {

    return this.props.quizes.map((quiz, index) => {

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
  /* async */ 
  componentDidMount() {
    this.props.onFetchQuizes();
  }
  render() {
    const { QuizList, QuizListWrapper } = classes;
    const { loading, quizes} = this.props;
    return (
      <div className={QuizList}>
        <div className={QuizListWrapper}>
          <h1>Список тестов</h1>
          <hr />
          {loading && quizes.length !== 0
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

function mapStateToProps(state) {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onFetchQuizes: () => dispatch(fetchQuizes()),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(QuizList);
