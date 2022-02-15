import React from "react";
import classes from './Form.module.css';

const Form = props => {
    const { children } = props;
    const { Form } = classes;
 
    return (
      <form className={Form} onSubmit={(e)=>{e.preventDefault()}}>
          {children}
      </form>
    )

}

export default Form;