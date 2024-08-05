import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuizContext } from '../context/QuizContext.js';

const Options = ({ data, onOptionSelect, stopTimer, optionSelected }) => {
  const [state, setState] = useState({
    selectedOption: null,
    isCorrect: null,
  });

  useEffect(() => {
    setState({
      selectedOption: null,
      isCorrect: null,
    });
  }, [data]);

  const handleOptionClick = (index) => {
    if (!optionSelected) {
      const correct = index + 1 === data.key;

      if (correct) {
        setTotalCorrect((prev) => prev + 1);
      }

      setState({
        selectedOption: index,
        isCorrect: correct,
      });

      stopTimer(); // Stop the timer when an option is selected
    }
  };

  useEffect(() => {
    if (state.selectedOption !== null) {
      onOptionSelect();
    }
  }, [state.selectedOption, onOptionSelect]);

  const { selectedOption, isCorrect } = state;
  const { setTotalCorrect } = useQuizContext();

  return (
    <div className={`optionsWrapper ${selectedOption !== null ? 'disableEvents' : ''}`}>
      <div className='row'>
        {data?.options.map((value, index) => {
          let optionClass = 'option';

          if (selectedOption !== null) {
            if (index === selectedOption) {
              optionClass += isCorrect ? ' bg-green' : ' bg-red';
            } else if (index + 1 === data.key) {
              optionClass += ' bg-green';
            }
          }

          return (
            <div
              onClick={() => handleOptionClick(index)}
              className='strong options col-md-6 mb-3'
              key={index}
            >
              <div className={optionClass}>{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Options.propTypes = {
  data: PropTypes.object,
  onOptionSelect: PropTypes.func,
  stopTimer: PropTypes.func,
  optionSelected: PropTypes.bool,
};

export default Options;
