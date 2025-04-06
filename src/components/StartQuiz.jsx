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
        height: '100vh',
        textAlign: 'center',
        padding: '2rem',
        typography: 'body1',
      }}
    >
      <Typography variant='h4' gutterBottom>
        You're about to attempt the {quizName} Quiz
      </Typography>

      {/* Container for RULES text and rules list */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens, horizontally on medium+ screens
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '80%', // Adjust width as needed
          marginTop: '2rem',
        }}
      >
        {/* RULES Text */}
        <Typography
          variant='h2'
          fontWeight={500}
          gutterBottom
          sx={{
            marginBottom: { xs: '1rem', md: 0 }, // Add margin for spacing in mobile view
          }}
        >
          RULES:
        </Typography>

        {/* Vertical Divider */}
        <Divider
          orientation={{ xs: 'horizontal', md: 'vertical' }} // Horizontal for small screens, vertical for larger
          flexItem
          sx={{
            mx: { xs: 0, md: 2 }, // No horizontal margin on small screens
            my: { xs: 2, md: 0 }, // Vertical margin for spacing in mobile view
            height: { xs: '2px', md: '100%' }, // Adjust height for small screens
            borderRightWidth: { md: 2 }, // Line thickness for vertical mode
            borderBottomWidth: { xs: 2, md: 0 }, // Line thickness for horizontal mode
          }}
        />

        {/* Rules List */}
        <List
          sx={{
            textAlign: 'left',
            marginLeft: { xs: 0, md: '1rem' }, // No margin for mobile view
          }}
        >
          <ListItem divider sx={{ backgroundColor: '#f0f0f0' }}>
            <Typography variant='body1'>
              • Do not refresh the page during the quiz.
            </Typography>
          </ListItem>
          <ListItem divider sx={{ backgroundColor: '#e0e0e0' }}>
            <Typography variant='body1'>
              • Each question has a time limit of 25 seconds.
            </Typography>
          </ListItem>
          <ListItem divider sx={{ backgroundColor: '#f0f0f0' }}>
            <Typography variant='body1'>
              • You cannot revisit a question after you move to the next one.
            </Typography>
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
          fontSize: '1.2rem',
        }}
      >
        Start Quiz
      </Button>
    </Box>
  );
};

export default StartQuiz;
