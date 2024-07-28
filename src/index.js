import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Quiz from './components/Quiz';
import { QuizProvider } from './context/QuizContext'; // Import your QuizProvider

// Initial Redux store state
const initialState = {
  addQuestion: {
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    key: '',
    questionAdded: false,
  },
  selectedAnswerReducer: {
    bgClass: 'neutral',
  },
};

// Configure Redux store
const store = configureStore(initialState);

// Create root entry point for ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <Provider store={store}>
    <Router>
      <QuizProvider>
        {' '}
        {/* Wrap your entire app with QuizProvider */}
        <Routes>
          <Route path='/' element={<Quiz />} />
          {/* Add more routes as needed */}
        </Routes>
      </QuizProvider>
    </Router>
  </Provider>
);
