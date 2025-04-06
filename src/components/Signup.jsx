import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Paper,
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
  Container,
} from '@mui/material';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/register', formData);
      localStorage.setItem('token', response.data.token); // Save token to localStorage
      // navigate('/dashboard'); // Redirect to dashboard or desired page
      navigate('/welcome'); // Redirect to Welcome page
    } catch (err) {
      setError(
        err.response?.data?.msg || 'Failed to sign up. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth='xs'>
      <Paper elevation={3} sx={{ padding: '2rem', marginTop: '4rem' }}>
        <Typography variant='h4' component='h1' gutterBottom align='center'>
          Sign Up
        </Typography>

        {error && (
          <Alert severity='error' sx={{ marginBottom: '1rem', width: '100%' }}>
            {error}
          </Alert>
        )}

        <form
          onSubmit={handleSignup}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <TextField
            label='Name'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label='Email'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label='Password'
            name='password'
            type='password'
            value={formData.password}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={loading}
            fullWidth
          >
            {loading ? <CircularProgress size={24} /> : 'Sign Up'}
          </Button>
        </form>

        <Typography align='center' sx={{ marginTop: '1rem' }}>
          Already have an account?{' '}
          <Button component='a' href='/login' variant='text'>
            Log In
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Signup;
