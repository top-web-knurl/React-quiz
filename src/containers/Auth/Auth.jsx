import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";
import Form from "../../components/UI/Form/Form";
class Auth extends Component {

  loginHandler = () => {

  }
  registerHandler = () => {

  }

  render() {
    const { Auth } = classes;
    return (
      <div className={Auth}>
        <div>
          <h1>Авторизация</h1>

          <Form>
            <fieldset>
              <label >
                <legend>Поле 1</legend>
                <input type="text" />
              </label>
              <label >
                <legend>Поле 2</legend>
                <input type="text" />
              </label>

            </fieldset>
            <fieldset>
              <Button
                type="success"
                onClick={this.loginHandler}
              >
                Войти
              </Button>
              <Button
                type="primary"
                onClick={this.registerHandler}
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
