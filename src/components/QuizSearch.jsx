import React, { useState } from 'react';
import { Box, TextField, List, ListItem, Link, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const QuizSearch = ({ quizzes }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filtered = quizzes.filter((quiz) =>
        quiz.name.toLowerCase().includes(query)
      );

      setFilteredQuizzes(filtered);
      setIsFlyoutOpen(true);
    } else {
      setFilteredQuizzes([]);
      setIsFlyoutOpen(false);
    }
  };

  const handleBlur = () => setIsFlyoutOpen(false);

  return (
    <Box sx={{ position: 'relative', width: '300px' }}>
      <TextField
        label='Search for a quiz...'
        variant='outlined'
        value={searchQuery}
        onChange={handleSearchChange}
        onBlur={handleBlur}
        onFocus={() => searchQuery && setIsFlyoutOpen(true)}
        sx={{
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: '4px',
          fontSize: '18px', // Increased label font size
        }}
        autoComplete='one-time-code'
      />

      {isFlyoutOpen && filteredQuizzes.length > 0 && (
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%', // Matches search box width
            backgroundColor: '#f9f9f9',
            border: '1px solid #ddd',
            borderRadius: '4px',
            mt: 1,
            zIndex: 10,
          }}
        >
          <List>
            {filteredQuizzes.map((quiz) => (
              <ListItem key={quiz.name} sx={{ px: 2, py: 1 }}>
                <Link
                  component={RouterLink}
                  to={quiz.path}
                  underline='none'
                  sx={{
                    color: '#333',
                    textDecoration: 'none',
                    fontSize: '1.2rem', // Increased item font size
                  }}
                >
                  {quiz.name} Quiz
                </Link>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

QuizSearch.propTypes = {
  quizzes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default QuizSearch;
