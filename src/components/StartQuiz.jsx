import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const StartQuiz = () => {
  const { quizKey } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); // Get the state passed from Link
  const { quizName } = location.state || {}; // Retrieve quizName from state
  console.log(quizName);

 // Handle the Start button click
 const handleStartClick = () => {
  // Redirect to the quiz route with the quizkKey in lowercase
  navigate(`/quiz/${quizKey.toLowerCase()}`);
};

  return (
    <div>
      <h1>You're about to attempt the {quizName} Quiz</h1>
      {/* Display quiz details and a start button */}
      <button onClick={handleStartClick}>Start Quiz</button>
    </div>
  );
};

export default StartQuiz;
