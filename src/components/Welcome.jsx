import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        gap: '2rem',
      }}
    >
      <Typography variant='h4'>Welcome to the Quiz App!</Typography>
      <Typography variant='body1'>
        Your account has been created, and you are now logged in.
      </Typography>
      <Button
        variant='contained'
        color='primary'
        onClick={() => navigate('/')}
        sx={{ marginTop: '1rem' }}
      >
        Go to Homepage
      </Button>
    </Box>
  );
};

export default Welcome;
