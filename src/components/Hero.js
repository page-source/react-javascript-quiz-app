import React from 'react';
import { Box } from '@mui/material';

// import { keyframes } from '@mui/system';

// const floating = keyframes`
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-10px); }
//   100% { transform: translateY(0); }
// `;

const Hero = () => {
  return (
    <div className='marBot40'>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '300px',
          backgroundImage: `url(assets/images/hero.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
      </Box>
    </div>
  );
};

export default Hero;
