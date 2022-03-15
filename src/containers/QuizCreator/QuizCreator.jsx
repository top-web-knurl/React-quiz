import React, { Component } from "react";
import axios from "axios";
import Button from "../../components/UI/Button/Button";
import Form from "../../components/UI/Form/Form";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import { createControl, validate, validateForm } from "../../formFramework/formFramework";
import classes from './QuizCreator.module.css';


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

function createFormControls() {
  return {
    question: createOptonControl('Введите вопрос', 'Вопрос не может быть пустым'),
    option1: createOptonControl("Вариант 1", "Заполните поле"),
    option2: createOptonControl("Вариант 2", "Заполните поле"),
    option3: createOptonControl("Вариант 3", "Заполните поле"),
    option4: createOptonControl("Вариант 4", "Заполните поле"),
  }
}

export default class QuizCreator extends Component {


  state = {
    quiz: [],
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControls(),
  }

  addQuestionHandler = () => {
    const quiz = this.state.quiz.concat();// concat() без параметров для клонирования массива
    const index = quiz.length + 1;
    const {question, option1, option2, option3, option4} =  this.state.formControls;
    const questionItem = {

       question: question,
       id:index,
       rightAnswerId: this.state.rightAnswerId,

       answers : [
         {text:option1.value, id:option1.id},
         {text:option2.value, id:option2.id},
         {text:option3.value, id:option3.id},
         {text:option4.value, id:option4.id},

       ]
    }

      quiz.push(questionItem);

      this.setState({
        quiz,
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls(),
      })
  }

  createQuizHandler = async () => {
    const url = 'https://react-quiz-e290c-default-rtdb.europe-west1.firebasedatabase.app';

    try{
      await axios.post(`${url}/quizes.json`, this.state.quiz);
      this.setState({
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls(),
      })
    } catch(e){
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

  selectChangeHandler = event => {
    this.setState({
      rightAnswerId: Number(event.target.value)
    })
  }

  render() {
    const { QuizCreator, QuizCreatorContainer, QuizCreatorFieldest } = classes;
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
        </div>
      </div>
    );
  }
}


