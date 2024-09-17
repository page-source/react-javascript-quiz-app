import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, Box, TextField, List, ListItem } from '@mui/material';
import Grid2 from '@mui/material/Grid2'; // Import Grid2

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);

  // Sample quiz data
  const quizzes = [
    { name: 'JavaScript', path: '/javascript' },
    { name: 'HTML', path: '/html' },
    { name: 'CSS', path: '/css' },
    { name: 'React', path: '/react' },
    { name: 'Node.js', path: '/nodejs' },
    { name: 'MongoDB', path: '/mongodb' },
  ];

  // Handle search input changes
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter quizzes based on search query
    if (query) {
      const filtered = quizzes.filter(quiz =>
        quiz.name.toLowerCase().includes(query)
      );

      setFilteredQuizzes(filtered);
    } else {
      setFilteredQuizzes([]);
    }
  };

  return (
    <Box component='header' sx={{ py: 4, backgroundColor: '#f5f5f5' }}>
      <Grid2 container alignItems='center'>
        {/* Quizzinga Title */}
        <Grid2>
          <Typography
            variant='h1'
            component='div'
            sx={{ fontSize: '3rem', fontWeight: '500', whiteSpace: 'nowrap' }} // Keep title inline
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
        <Grid2 sx={{ ml: 2 }}> {/* Add margin to the left */}
          <TextField
            label='Search for a quiz...'
            variant='outlined'
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{
              width: '300px', // Control width of the search bar
              backgroundColor: '#fff', // Make it more distinct
              borderRadius: '4px',
            }}
          />
        </Grid2>
      </Grid2>

      {/* Display search results */}
      {filteredQuizzes.length > 0 && (
        <List>
          {filteredQuizzes.map((quiz) => (
            <ListItem key={quiz.name}>
              <Link
                component={RouterLink}
                to={quiz.path}
                underline='none'
                sx={{ color: '#000', textDecoration: 'none', fontSize: '1.2rem' }}
              >
                {quiz.name} Quiz
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Header;
