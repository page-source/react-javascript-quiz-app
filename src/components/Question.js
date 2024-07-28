import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ data }) => {
  return (
    <div className='lead question disableEvents'>
      <h3>{data}</h3>
    </div>
  );
};

Question.propTypes = {
  data: PropTypes.string,
};

export default Question;
