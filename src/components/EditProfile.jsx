import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuizContext } from '../context/QuizContext';
import Grid2 from '@mui/material/Grid2'; // Importing Grid2 for layout
import ProfileNavigation from './ProfileNavigation'; // Import ProfileNavigation

const EditProfile = () => {
  const { userInfo, setUserInfo } = useQuizContext();
  const [user, setUser] = useState(userInfo || {});
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login'); // Redirect if user is not logged in
    }
  }, [userInfo, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('/api/users/update', {
        userId: userInfo._id,
        ...user,
      });

      setUserInfo(response.data); // Update context with new user data
      navigate('/profile'); // Redirect to profile page
    } catch (error) {
      console.error('Failed to update profile', error);
    }
  };

  return (
    <Box p={4} pl={0}>
      <Grid2 container spacing={2}>
        {/* Include ProfileNavigation */}
        <Grid2 size={{ xs: 12, md: 4, lg: 4, xl: 3 }} sx={{ marginTop: 4, padding: 2 }}>
          <ProfileNavigation />
        </Grid2>

        {/* Main Content */}
        <Grid2 size={{ xs: 12, md: 8, lg: 8, xl: 9 }} sx={{ padding: 4 }}>
          <Typography variant='h4' textAlign='center' mb={4}>
            Edit Profile
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label='Name'
              name='name'
              value={user.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label='Location'
              name='location'
              value={user.location}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label='Email'
              name='email'
              value={user.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <Button variant='outlined' component='label' sx={{ mb: 2 }}>
              Upload Profile Picture
              <input type='file' hidden />
            </Button>

            <Divider sx={{ my: 4 }} />

            <Button type='submit' variant='contained' color='primary' fullWidth>
              Save Changes
            </Button>
          </form>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default EditProfile;
