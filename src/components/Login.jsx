import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
  Paper,
} from '@mui/material';
import { useQuizContext } from '../context/QuizContext.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUserInfo, userInfo } = useQuizContext();

  useEffect(() => {
    if (userInfo?.name) {
      navigate('/profile');
    }
  }, [userInfo, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginResp = await axios.post('http://localhost:4000/api/auth/login', {
        email,
        password,
      },
      {
        withCredentials: true //allows cookie to be passed from server to browser
      });

      const userInfo = loginResp.data.user;
      setUserInfo(userInfo);
      navigate('/'); // Redirect on successful login
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <Container maxWidth='xs'>
      <Paper elevation={3} sx={{ padding: '2rem', marginTop: '4rem' }}>
        <Typography variant='h4' component='h1' gutterBottom align='center'>
          Login
        </Typography>

        {error && (
          <Alert severity='error' sx={{ marginBottom: '1rem' }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Box sx={{ marginBottom: '1rem' }}>
            <TextField
              label='Email'
              variant='outlined'
              fullWidth
              required
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ marginBottom: '1.5rem' }}>
            <TextField
              label='Password'
              variant='outlined'
              fullWidth
              required
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            sx={{ padding: '0.75rem', fontSize: '1rem', fontWeight: 'bold' }}
          >
            Login
          </Button>
        </form>

        <Typography align='center' sx={{ marginTop: '1rem' }}>
          Don't have an account? <Button component='a' href='/signup' variant='text'>Sign Up</Button>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
