import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, Box, Grid2 } from '@mui/material';
import axios from 'axios';

const generateRandomColor = () => {
  const colors = ['#FFEBEE', '#F3E5F5', '#E3F2FD', '#E8F5E9', '#FFF3E0', '#FCE4EC', '#E0F7FA'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Carousel = ({ title, type }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/quizzes?type=${type}`);
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, [type]);

  return (
    <Box sx={{ marginBottom: 5 }}>
      <Typography variant='h4' gutterBottom sx={{ marginBottom: 2, fontWeight: 600 }}>
        {title}
      </Typography>
      <Grid2 container spacing={2}>
        {quizzes.map((quiz) => (
          <Grid2
            xs={12}
            sm={6}
            md={4}
            key={quiz.quizKey}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              width: '200px',
              height: '200px',
              backgroundColor: generateRandomColor(),
              borderRadius: '10px',
              padding: '16px',
              margin: '0 auto',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            component={Link}
            to={`/attempt/${quiz.quizKey}`} // Link to Attempt page
            state={{ quizName: quiz.name }}
          >
            <Box
              component='img'
              src={`${quiz.image}`} // Assuming quiz.image holds the image name
              alt={quiz.name}
              sx={{
                width: '100px',
                height: '100px',

                // borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: 2,
              }}
            />
            <Typography variant='h4' sx={{ color: 'black' }}>
              {quiz.name}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

Carousel.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Carousel;
