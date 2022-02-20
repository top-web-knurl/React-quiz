import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";
import Form from "../../components/UI/Form/Form";
import Input from "../../components/UI/Input/Input";
import is from 'is_js';

class Auth extends Component {

  state = {
    isFormValid: false,
    formContarols: {
      email: {
        value: '',
        type: 'email',
        name: 'Ваш email',
        errorMessage: 'Некорректный email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        name: 'Пароль',
        errorMessage: 'Не менее 6 символов',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  loginHandler = () => {

  }
  registerHandler = () => {

  }

  validateControl(value, validation) {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (validation.email) {
      isValid = is.email(value) && isValid;
    }
    if (validation.minLength) {
      isValid = (value.length >= validation.minLength) && isValid;
    }

    console.log(isValid);
    return isValid;
  }

  onChangeHandler = (event, controlName) => {

    const formContarols = { ...this.state.formContarols };
    const control = { ...formContarols[controlName] }

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formContarols[controlName] = control;

    let isFormValid = true;

    Object.keys(formContarols).forEach(name => {
        isFormValid = formContarols[name] && isFormValid;
    })

    this.setState({
      isFormValid,
      formContarols
    });
  }

  renderInputs = () => {
    return Object.keys(this.state.formContarols).map((controlName, index) => {
      const { type, value, name, valid, touched, errorMessage, validation } = this.state.formContarols[controlName];
   
      return (
        <Input
          key={index}
          type={type}
          value={value}
          valid={valid}
          inputTitle={name}
          touched={touched}
          errorMessage={errorMessage}
          shouldValidate={!!validation}
          onChange={e => this.onChangeHandler(e, controlName)}
        />
      )

    })
  }

  render() {
    const { Auth } = classes;
    return (
      <div className={Auth}>
        <div>
          <h1>Авторизация</h1>

          <Form>
            <fieldset>
              {this.renderInputs()}
            </fieldset>
            <fieldset>
              <Button
                type="success"
                onClick={this.loginHandler}
                disabled={this.state.isFormValid}
              >
                Войти
              </Button>
              <Button
                type="primary"
                onClick={this.registerHandler}
                disabled={this.state.isFormValid}
              >
                Регистрация
              </Button>
            </fieldset>
          </Form>
        </div>
      </div >
    );
  }
}

export default Auth;
