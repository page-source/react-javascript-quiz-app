import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import { Link } from 'react-router-dom';
import Question from './Question.js';
import Options from './Options.js';
import data from '../data.js';
import Total from './Total';
import QuizComplete from './QuizComplete.js';

// import { useQuizContext } from '../context/QuizContext.js';

// import { useQuizContext } from '../context/QuizContext';

// if you want to shuffle questions everytime just to add an element of surprise

// const shuffleArray = (array) => {
//   let i = array.length - 1;

//   for (; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }

//   return array;
// };

const Quiz = ({ url }) => {
  const [quizData, setQuizData] = useState({});
  const [completeQuiz, setCompleteQuiz] = useState(false);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [optionSelected, setOptionSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // const { selectedOption, setSelectedOption } = useQuizContext();

  const nextQuestion = () => {
    if (optionSelected) {
      if (questionCounter === quizData.length - 1) {
        setCompleteQuiz(true);
      } else {
        setQuestionCounter((prevCounter) => prevCounter + 1);
      }

      setOptionSelected(false);
      setErrorMessage('');
    } else {
      setErrorMessage('You forgot to select an option. Just take a guess maybe.');
    }
  };

  // Use useEffect to perform actions based on questionCounter changes
  useEffect(() => {
    setOptionSelected(false);
    console.log(questionCounter);

    if (questionCounter === quizData.length) {
      setCompleteQuiz(true);
    }
  }, [questionCounter, quizData.length]); // Dependencies array

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

  // const shuffledPosts = shuffleArray(quizData);
  const shuffledPosts = quizData;

  console.log(shuffledPosts);
  return (
    <div>
      {completeQuiz ? (
        <QuizComplete quizLength={quizData.length} />
      ) : (
        <React.Fragment>
          <div className='row posRelative'>
            <div className='col-md-10 disableEvents mx-auto'>
              <Question data={shuffledPosts[questionCounter].question} />
            </div>
            <Options
              data={shuffledPosts[questionCounter]}
              onOptionSelect={() => setOptionSelected(true)} // Handle option select
              optionSelected={optionSelected}
            />
            {/* <Total counter={questionCounter + 1} data={quizData} /> */}
          </div>
          {errorMessage && <div className='error-message'>{errorMessage}</div>}
          <div className='col-md-10 noPad'>
            <button
              className='marTop25 nextBtn btn pull-right'
              onClick={() => nextQuestion()}
            >
              {questionCounter === quizData.length - 1 ? 'Complete Quiz' : 'Next Question'}
            </button>
            {/* <Link to='/addQuestion'>
              <button className='marTop25 nextBtn btn pull-left'>
                Add Question
              </button>
            </Link> */}
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
