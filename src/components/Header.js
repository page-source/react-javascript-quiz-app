import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, Box, Grid2, Container } from '@mui/material'; // Import Container here
import LoginHeader from './LoginHeader';
import QuizSearch from './QuizSearch';

// Sample quiz data (you can later fetch this dynamically)
const quizzes = [
  { name: 'JavaScript', path: '/javascript' },
  { name: 'HTML', path: '/html' },
  { name: 'CSS', path: '/css' },
  { name: 'React', path: '/react' },
  { name: 'Node.js', path: '/nodejs' },
  { name: 'MongoDB', path: '/mongodb' },
];

const Header = () => (
  <Box component='header' sx={{ py: 4, backgroundColor: '#f5f5f5' }}>
    <Container maxWidth='lg'>
      <Grid2
        container
        alignItems='center'
        justifyContent='space-between'

        // sx={{ px: 2 }} // Added padding on the x-axis to provide space on both ends
      >
        {/* Title on the left with margin */}
        <Grid2>
          <Typography
            variant='h1'
            component='div'
            sx={{ fontSize: '3rem', fontWeight: '500', whiteSpace: 'nowrap' }}
          >
            <Link
              className='quiz-title'
              component={RouterLink}
              to='/'
              underline='none'
              sx={{ color: 'inherit', textDecoration: 'none' }}
            >
              Quizzinga
            </Link>
          </Typography>
        </Grid2>

        {/* Search Input */}
        <Grid2 sx={{ mx: 2, flexGrow: 1 }}>
          <QuizSearch quizzes={quizzes} />
        </Grid2>

        {/* Login Component on the right with margin */}
        <Grid2>
          <LoginHeader />
        </Grid2>
      </Grid2>
    </Container>
  </Box>
);

export default Header;
