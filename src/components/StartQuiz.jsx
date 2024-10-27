import React, { useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  Divider,
} from '@mui/material';
import { useQuizContext } from '../context/QuizContext';

const StartQuiz = () => {
  const { quizKey } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { quizName } = location.state || {};
  const { setTotalCorrect } = useQuizContext();

  useEffect(() => {
    // Reset the total correct answers whenever a new quiz starts
    setTotalCorrect(0);
  }, [quizKey, setTotalCorrect]);

  const handleStartClick = () => {
    navigate(`/quiz/${quizKey.toLowerCase()}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        // justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <Typography variant='h4' gutterBottom>
        You're about to attempt the {quizName} Quiz
      </Typography>

      {/* Container for RULES text and rules list */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '80%', // Adjust width as needed
          marginTop: '2rem',
        }}
      >
        {/* RULES Text on the left */}
        <Typography variant='h2' fontWeight={500} gutterBottom>
          RULES:
        </Typography>

        {/* Vertical Divider */}
        <Divider
          orientation='vertical'
          flexItem
          sx={{
            mx: 2,
            height: '100%', // Ensure the line stretches vertically
            borderRightWidth: 2, // Adjust line thickness
          }}
        />

        {/* Rules list on the right */}
        <List sx={{ textAlign: 'left', marginLeft: '1rem' }}>
          <ListItem
            divider
            sx={{ fontSize: '1.8rem', backgroundColor: '#f0f0f0' }} // Light gray background for first item
          >
            • Do not refresh the page during the quiz.
          </ListItem>
          <ListItem
            divider
            sx={{ fontSize: '1.8rem', backgroundColor: '#e0e0e0' }} // Darker gray for second item
          >
            • Each question has a time limit of 25 seconds.
          </ListItem>
          <ListItem
            divider
            sx={{ fontSize: '1.8rem', backgroundColor: '#f0f0f0' }} // Alternating back to light gray
          >
            • You cannot revisit a question after you move to the next one.
          </ListItem>
        </List>
      </Box>

      {/* Start button */}
      <Button
        variant='contained'
        color='primary'
        onClick={handleStartClick}
        sx={{
          marginTop: '4rem',
          width: '200px',
          height: '50px',
          fontSize: '1.8rem'
        }}
      >
        Start Quiz
      </Button>
    </Box>
  );
};

export default StartQuiz;
