import React from 'react';
import { Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Grid2 from '@mui/material/Grid2'; // Importing Grid2
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import QuizIcon from '@mui/icons-material/Quiz';

const linkStyles = {
  display: 'flex', // Use flexbox to align icon and text
  alignItems: 'center', // Center the icon and text vertically
  color: 'black',
  fontWeight: 'bold', // Make links bold
  '&:hover': {
    textDecoration: 'none', // Remove underline on hover
    color: '#757575', // Slight gray color on hover
  },
  gap: '8px', // Add gap between icon and text
};

const ProfileNavigation = () => (
  <Box>
    <Grid2 container spacing={3} justifyContent='flex-start' sx={{ flexDirection: { xs: 'row', sm: 'column' } }}>
      <Grid2 item xs={6} sm={4} md={12}>
        <Link
          component={RouterLink}
          to='/profile'
          variant='h4' // Apply h4 variant to the link
          underline='hover' // Show underline on hover
          sx={linkStyles} // Reuse the styles
        >
          <DashboardIcon /> {/* Dashboard icon */}
          Dashboard
        </Link>
      </Grid2>
      <Grid2 item xs={6} sm={4} md={12}>
        <Link
          component={RouterLink}
          to='/profile/edit'
          variant='h4'
          underline='hover'
          sx={linkStyles} // Reuse the styles
        >
          <EditIcon /> {/* Edit icon */}
          Edit Profile
        </Link>
      </Grid2>
      <Grid2 item xs={6} sm={4} md={12}>
        <Link
          component={RouterLink}
          to='/profile/past-quizzes'
          variant='h4'
          underline='hover'
          sx={linkStyles} // Reuse the styles
        >
          <QuizIcon /> {/* Quiz icon */}
          My Past Quizzes
        </Link>
      </Grid2>
    </Grid2>
  </Box>
);

export default ProfileNavigation;
