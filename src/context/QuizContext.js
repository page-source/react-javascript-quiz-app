import React, { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

// Create a new context
const QuizContext = createContext();

// Create a custom provider for the context
export const QuizProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalWrong, setTotalWrong] = useState(null);

  // const [selectedOption, setSelectedOption] = useState(null);
  const appContext = useMemo(() => {
    return {
      selectedOption,
      setSelectedOption,
      totalCorrect,
      setTotalCorrect,
      totalWrong,
      setTotalWrong,
    };
  }, [
    selectedOption,
    totalCorrect,
    setTotalCorrect,
    totalWrong,
    setTotalWrong,
  ]);

  return (
    <QuizContext.Provider value={appContext}>{children}</QuizContext.Provider>
  );
};

QuizProvider.propTypes = {
  children: PropTypes.array,
};

// Custom hook to use the context
export const useQuizContext = () => {
  return useContext(QuizContext);
};
