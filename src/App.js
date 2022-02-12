import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import './index.css'

class App extends Component {

  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/quiz-creator" element={<QuizCreator />} />
          <Route path="/quiz/:id" element={<QuizList />} />
          <Route path="/" element={<Quiz />} />
         
        </Routes>
        
      </Layout>
    );
  }
}

export default App;
