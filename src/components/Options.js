import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuizContext } from '../context/QuizContext.js';

const Options = ({ data, onOptionSelect, optionSelected }) => {
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
      const correct = index + 1 === parseInt(data.key); // Check if the selected option is correct

      if (correct) {
        setTotalCorrect((prev) => prev + 1);
      }

      setState({
        selectedOption: index,
        isCorrect: correct,
      });

      // stopTimer(); // for dont stop the timer when an option is selected
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

          // If the option is selected
          if (selectedOption !== null) {
            if (index === selectedOption) {
              // If the selected option is correct, color it green; otherwise, red
              optionClass += isCorrect ? ' bg-green' : ' bg-red';
            }

            // If the selected option is wrong, show the correct option in green
            if (!isCorrect && index + 1 === parseInt(data.key)) {
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
