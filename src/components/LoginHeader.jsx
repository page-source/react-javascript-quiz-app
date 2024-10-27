import React, { useState } from 'react';
import { Button, Menu, MenuItem, Box, ListItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';

const LoginHeader = () => {
  const { userInfo } = useQuizContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const isLoggedIn = Boolean(userInfo && userInfo.name);
  console.log(isLoggedIn);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box>
      {isLoggedIn ? (
        <React.Fragment>
          <Button
            onClick={handleClick}
            sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}
          >
            Hello, {userInfo.name} ▼
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleClose}
              sx={{ fontSize: '1.3rem', padding: 0 }}
            >
              <ListItem
                component={RouterLink}
                to='/profile'
                sx={{
                  width: '100%',
                  color: 'black',
                }}
              >
                My Profile
              </ListItem>
            </MenuItem>

            <MenuItem
              onClick={handleClose}
              sx={{ fontSize: '1.3rem', padding: 0 }}
            >
              <ListItem
                component={RouterLink}
                to='/my-past-quizzes'
                sx={{
                  width: '100%',
                  color: 'black',
                }}
              >
                My Past Quizzes
              </ListItem>
            </MenuItem>

            <MenuItem
              onClick={handleClose}
              sx={{ fontSize: '1.3rem', padding: 0 }}
            >
              <ListItem
                component={RouterLink}
                to='/logout'
                sx={{
                  width: '100%',
                  color: 'black',
                }}
              >
                Logout
              </ListItem>
            </MenuItem>
          </Menu>
        </React.Fragment>
      ) : (
        <Button
          component={RouterLink}
          to='/login'
          variant='outlined'
          sx={{ fontWeight: 'bold', fontSize: '1rem' }} // Increased font size
        >
          Login
        </Button>
      )}
    </Box>
  );
};

export default LoginHeader;
