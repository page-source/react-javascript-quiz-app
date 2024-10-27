import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuizContext } from '../context/QuizContext';
import axios from 'axios';

const QuizComplete = ({ quizLength, quizKey }) => {
  const { totalCorrect } = useQuizContext();

  useEffect(() => {
    // Function to save quiz result
    const saveQuizResult = async () => {
      try {
        const response = await axios.post(
          'http://localhost:4000/api/user/saveQuizResult',
          {
            quizKey,
            totalCorrect,
            quizLength,
          },
          { withCredentials: true } // Include cookies for authentication
        );

        console.log('Quiz result saved:', response.data);
      } catch (error) {
        console.error('Error saving quiz result:', error);
      }
    };

    // Call saveQuizResult when the component mounts
    saveQuizResult();
  }, [quizKey, totalCorrect, quizLength]);

  return (
    <div>
      <h3>You've got {totalCorrect} out of {quizLength} correct!</h3>
    </div>
  );
};

QuizComplete.propTypes = {
  quizLength: PropTypes.number.isRequired,
  quizKey: PropTypes.string.isRequired, // Assuming each quiz has an ID
};

export default QuizComplete;
