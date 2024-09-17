import React from 'react';
import { Container } from '@mui/material';
import Carousel from './Carousel';
import Hero from './Hero';

const Homepage = () => {
  return (
    <Container maxWidth='lg' sx={{ marginTop: 5 }}>
      <Hero />
      {/* Pass query types for each category */}
      <Carousel title='Trending Quizzes' type='trending' />
      <Carousel title='Popular Quizzes' type='popular' />
      <Carousel title='Recently Added' type='recentlyadded' />
      <Carousel title='Can you attempt these?' type='canYouAttempt' />
    </Container>
  );
};

export default Homepage;
