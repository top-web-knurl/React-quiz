import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";
import Form from "../../components/UI/Form/Form";
import Input from "../../components/UI/Input/Input";
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
              <Input
                legend='Ваш email'
                type="Email"
              >
              </Input>
              <Input
                legend='Пароль'
                type="password"
              >
              </Input>


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
