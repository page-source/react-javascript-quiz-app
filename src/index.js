import React from 'react';

import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Homepage from './components/HomePage';
import StartQuiz from './components/StartQuiz';
import Quiz from './components/Quiz';
import { QuizProvider } from './context/QuizContext';
import Header from './components/Header';

const initialState = {
  addQuestion: { question: '', option1: '', option2: '', option3: '', option4: '', key: '', questionAdded: false },
  selectedAnswerReducer: { bgClass: 'neutral' },
};

const store = configureStore(initialState);

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <QuizProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          {/* Route for starting the quiz */}
          <Route path='/attempt/:quizKey' element={<StartQuiz />} />
          {/* Routes for actual quizzes */}
          <Route
            path='/quiz/:quizKey'
            element={<Quiz url='http://localhost:4000/api/quizzes' />}
          />
        </Routes>
      </QuizProvider>
    </Router>
  </Provider>
);
