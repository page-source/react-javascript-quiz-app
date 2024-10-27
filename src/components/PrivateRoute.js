import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';

const PrivateRoute = ({ children }) => {
  const { userInfo } = useQuizContext(); // Get userInfo from context

  console.log(userInfo?.name);
  return userInfo?.name ? children : <Navigate to='/login' />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
