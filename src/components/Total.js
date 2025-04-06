import React from 'react';
import PropTypes from 'prop-types';

// import { useQuizContext } from '../context/QuizContext';

const Total = ({ counter, data }) => {
  return (
    <span>
      {counter}/{data.length}
    </span>
  );
};

Total.propTypes = {
  counter: PropTypes.number,
  data: PropTypes.array,
};

export default Total;
