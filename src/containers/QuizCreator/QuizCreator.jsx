import React, { Component } from "react";
import axios from "axios";
import Button from "../../components/UI/Button/Button";
import Form from "../../components/UI/Form/Form";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import { createControl, validate, validateForm } from "../../formFramework/formFramework";
import classes from './QuizCreator.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

function createOptonControl(name, error, required = true) {

  return createControl(
    {
      inputName: name,
      errorMessage: error,
    },
    {
      required: required
    }
  )

}

function createFormControls(nameQuiz = null,) {

  return {
    nameQuiz: nameQuiz ? nameQuiz : createOptonControl('Введите название теста', 'Название теста не может быть пустым'),
    question: createOptonControl('Введите вопрос', 'Вопрос не может быть пустым'),
    option1: createOptonControl("Вариант 1", "Заполните поле"),
    option2: createOptonControl("Вариант 2", "Заполните поле"),
    option3: createOptonControl("Вариант 3", "Заполните поле"),
    option4: createOptonControl("Вариант 4", "Заполните поле"),
  }
}

export default class QuizCreator extends Component {


  state = {
    nameQuiz: false,
    quiz: [],
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControls(),
  }

  addQuestionHandler = () => {
    const quiz = this.state.quiz.concat();// concat() без параметров для клонирования массива
    const index = quiz.length + 1;
    const { nameQuiz, question, option1, option2, option3, option4 } = this.state.formControls;
    const questionItem = {

      nameQuiz: nameQuiz.value,
      question: question,
      id: index,
      rightAnswerId: this.state.rightAnswerId,

      answers: [
        { text: option1.value, id: 1 },
        { text: option2.value, id: 2 },
        { text: option3.value, id: 3 },
        { text: option4.value, id: 4 },

      ]
    }

    quiz.push(questionItem);

    this.setState({
      nameQuiz,
      quiz,
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls(nameQuiz),
    })
  }

  createQuizHandler = async () => {
    const url = 'https://quizes-test-default-rtdb.europe-west1.firebasedatabase.app';

    try {
      await axios.post(`${url}/quizes.json`, this.state.quiz);
      this.setState({
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls(),
        nameQuiz: false,
      })
    } catch (e) {
      console.log(e);
    }

  }


  changeHandler = (value, controlName) => {

    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({
      formControls,
      isFormValid: validateForm(formControls),
    });
  }


  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const { value, inputName, valid, touched, errorMessage, validation } = this.state.formControls[controlName]

      return (
        <Input
          disabled={(controlName === 'nameQuiz') ? this.state.nameQuiz : false}
          key={index}
          inputTitle={inputName}
          value={value}
          valid={valid}
          shouldValidate={!!validation}
          touched={touched}
          errorMessage={errorMessage}
          onChange={event => this.changeHandler(event.target.value, controlName)}
        />
      )
    });
  }

  renderQuizQuestion(quiz, classes) {
    const {QuizQuestion, success, fail} = classes;
    return (
      <ul className={QuizQuestion}>

        {this.state.nameQuiz ? <h2>Название теста: {this.state.nameQuiz.value}</h2> : null}
        {quiz.map((questions, index) => {
          return (
            <li key={index}>
              <h3>{index + 1}. вопрос: {questions.question.value}</h3>
              <h4>Ответы:</h4>
              <ol>
                {questions.answers.map((answer, key) => {
                  return <li
                    className={(answer.id === questions.rightAnswerId) ? success : fail}
                    key={key}
                  >
                   <span>{answer.text}</span>
                    <FontAwesomeIcon
                      icon={(answer.id === questions.rightAnswerId) ?  faCheck : faTimes}
                      size="lg"
                  />
                  </li>
                })}
              </ol>
            </li>
          )
        })}
      </ul>
    )
  }
  selectChangeHandler = event => {
    this.setState({
      rightAnswerId: Number(event.target.value)
    })
  }

  render() {
    const { QuizCreator, QuizCreatorContainer, QuizCreatorFieldest} = classes;

    return (

      <div className={QuizCreator}>
        <div className={QuizCreatorContainer}>
          <h1>Создание теста</h1>
          <Form>

            <fieldset className={QuizCreatorFieldest}>
              {this.renderControls()}
              <Select
                title="Правильный ответ"
                value={this.state.rightAnswerId}
                onChange={this.selectChangeHandler}
                options={[
                  { text: 1, value: 1 },
                  { text: 2, value: 2 },
                  { text: 3, value: 3 },
                  { text: 4, value: 4 }
                ]}
              />
            </fieldset>

            <fieldset>
              <Button
                type="success"
                onClick={this.addQuestionHandler}
                disabled={!this.state.isFormValid}
              >
                Добавить вопрос
              </Button>

              <Button
                type="primary"
                onClick={this.createQuizHandler}
                onChange={this.selectChangeHandler}
                disabled={this.state.quiz.length === 0}
              >
                Создать тест
              </Button>
            </fieldset>

          </Form>

          {this.state.quiz.length ?
            this.renderQuizQuestion(this.state.quiz, classes)
            : null}

        </div>
      </div>

    );
  }
}


