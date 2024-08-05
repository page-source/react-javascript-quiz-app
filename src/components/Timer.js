import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ setQuestionCounter, timerValue }) => {
  console.log(timerValue);
  const [timeLeft, setTimeLeft] = useState(timerValue); // Start from 25 seconds

  useEffect(() => {
    setTimeLeft(timerValue); // Reset timeLeft whenever timerValue changes
  }, [timerValue]);

  useEffect(() => {
    if (timeLeft === 0) {
      setQuestionCounter();
      setTimeLeft(timerValue);
      return;
    } // Stop the timer when it reaches 0

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000); // Update every second

    return () => clearInterval(timerId); // Cleanup on unmount or when timeLeft changes
  }, [timeLeft, setQuestionCounter]);

  return (
    <div className='timer'>
      <p>Time left: {timeLeft}</p>
    </div>
  );
};

Timer.propTypes = {
  setQuestionCounter: PropTypes.function,
  timerValue: PropTypes.number
};

export default Timer;
