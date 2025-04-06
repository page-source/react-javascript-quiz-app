import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useQuizContext } from '../context/QuizContext';
import ProfileNavigation from './ProfileNavigation';

const Dashboard = () => {
  const { userInfo } = useQuizContext(); // Get userInfo from context

  return (
    <Box p={4} pl={0}>
      <Grid container>
        {/* Left Sidebar - Profile Navigation */}
        <Grid
          size={{ xs: 12, md: 4, lg: 4, xl: 3 }}
          sx={{ marginTop: 4, padding: 2 }}
        >
          <ProfileNavigation />
        </Grid>

        {/* Main Content */}
        <Grid size={{ xs: 12, md: 8, lg: 8, xl: 9 }} sx={{ padding: 4 }}>
          <List sx={{ typography: 'body1' }}>
            <ListItem>Name: {userInfo.name}</ListItem>
            <ListItem>Location: {userInfo.location}</ListItem>
            <ListItem>Email: {userInfo.email}</ListItem>
            <ListItem>
              Member Since: {new Date(userInfo.createdAt).toLocaleDateString()}
            </ListItem>
            <ListItem>Subscription Type: {userInfo.subscriptionType}</ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

Dashboard.propTypes = {
  userInfo: PropTypes.object,
};

export default Dashboard;
