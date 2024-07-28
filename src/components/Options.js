import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuizContext } from '../context/QuizContext.js';

// import { useDispatch, useSelector } from 'react-redux';

// import Answer from './Answer';
// import { selectedAnswer } from '../actions/selectedAnswerActions';

const Options = ({ data, onOptionSelect, optionSelected }) => {
  // const dispatch = useDispatch();
  // const bgClass = useSelector((state) => state.selectedAnswerReducer.bgClass);

  const [state, setState] = useState({
    selectedOption: null,
    isCorrect: null,
  });

  // Reset state only when data changes
  useEffect(() => {
    setState({
      selectedOption: null,
      isCorrect: null,
    });
  }, [data]);

  const handleOptionClick = (index) => {
    if (!optionSelected) {
      // Only handle click if no option is selected yet
      const correct = index + 1 === data.key;

      if (correct) {
        setTotalCorrect((prev) => prev + 1);
      }

      setState(
        {
          selectedOption: index,
          isCorrect: correct,
        },
        () => onOptionSelect()
      );
    }
  };

  const { selectedOption, isCorrect } = state;
  const { setTotalCorrect } = useQuizContext();
  return (
    <div
      className={`col-md-10 optionsWrapper ${selectedOption !== null ? 'disableEvents' : ''}`}
    >
      <div className='row'>
        {data.options.map((value, index) => {
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
      {/* <Answer classApply={bgClass} /> */}
    </div>
  );
};

Options.propTypes = {
  data: PropTypes.array,
  onOptionSelect: PropTypes.func,
  optionSelected: PropTypes.string,
};

export default Options;
