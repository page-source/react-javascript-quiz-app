import React from 'react';
import PropTypes from 'prop-types';

import { useQuizContext } from '../context/QuizContext';

const QuizComplete = ({ quizLength }) => {
  const { totalCorrect } = useQuizContext();
  return (
    <div>
      <h3>You've got {totalCorrect} out of {quizLength} </h3>
    </div>
  );
};

QuizComplete.propTypes = {
  quizLength: PropTypes.number,
  data: PropTypes.array,
};

export default QuizComplete;
