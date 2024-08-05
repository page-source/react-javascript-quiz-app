import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Question from './Question.js';
import Options from './Options.js';
import data from '../data.js';
import Total from './Total';
import QuizComplete from './QuizComplete.js';

const Quiz = ({ url }) => {
  const [quizData, setQuizData] = useState([]);
  const [completeQuiz, setCompleteQuiz] = useState(false);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [optionSelected, setOptionSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [timer, setTimer] = useState(25);
  const timerRef = useRef();

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const nextQuestion = () => {
    if (optionSelected || timer === 0) {
      if (questionCounter === quizData.length - 1) {
        setCompleteQuiz(true);
      } else {
        setQuestionCounter((prevCounter) => prevCounter + 1);
      }

      setOptionSelected(false);
      setErrorMessage('');
    } else {
      setErrorMessage('You forgot to select an option.');
    }
  };

  useEffect(() => {
    if (timer === 0) {
      nextQuestion();
    }
  }, [timer]);

  useEffect(() => {
    stopTimer(); // Stop any existing timer
    setTimer(25); // Reset the timer
    setOptionSelected(false);

    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(timerRef.current); // Clear timer on component unmount
  }, [questionCounter]);

  useEffect(() => {
    const loadQuestionsFromServer = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setQuizData(data);
      } catch (error) {
        setQuizData(data); // Fallback to local data in case of error
      }
    };

    loadQuestionsFromServer();
  }, [url]);

  if (!quizData || !quizData.length) {
    return <div>Loading...</div>;
  }

  const shuffledPosts = quizData;

  return (
    <div className='quizContainer'>
      {completeQuiz ? (
        <QuizComplete quizLength={quizData.length} />
      ) : (
        <React.Fragment>
          <div className='row posRelative'>
            <div className='disableEvents mx-auto'>
              <Question data={shuffledPosts[questionCounter]?.question} />
              <div className='timer'>Time left: {timer} seconds</div>
            </div>
            <Options
              data={shuffledPosts[questionCounter]}
              onOptionSelect={() => setOptionSelected(true)}
              stopTimer={stopTimer}
              optionSelected={optionSelected}
            />
            <Total counter={questionCounter + 1} data={quizData} />
          </div>
          {errorMessage && <div className='error-message'>{errorMessage}</div>}
          <div className='noPad'>
            <button
              className='marTop25 nextBtn btn pull-right'
              onClick={nextQuestion}
            >
              {questionCounter === quizData.length - 1
                ? 'Complete Quiz'
                : 'Next Question'}
            </button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

Quiz.propTypes = {
  url: PropTypes.string,
};

export default Quiz;
