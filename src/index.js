import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import theme from './theme'; // Import the theme object
import Homepage from './components/HomePage';
import StartQuiz from './components/StartQuiz';
import Quiz from './components/Quiz';
import { QuizProvider, useQuizContext } from './context/QuizContext';
import Header from './components/Header';
import Login from './components/Login';
import EditProfile from './components/EditProfile';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import axios from 'axios';
import { Container } from '@mui/material';

const GlobalAuthCheck = () => {
  const { setUserInfo } = useQuizContext();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/auth/me', { withCredentials: true });

        if (response.data) {
          setUserInfo({ name: response.data.name, email: response.data.email });
        } else {
          //navigate('/login');
        }
      } catch (error) {
        console.error('User not authenticated');

        //navigate('/login');
      }
    };

    checkAuth();
  }, [setUserInfo, navigate]);

  return null; // This component doesn't render anything
};

const root = createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}> {/* Apply the theme here */}
    <Router>
    <Container maxWidth='lg'> {/* Adjust the maxWidth as needed */}
      <QuizProvider>
        <GlobalAuthCheck />
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path='/profile/edit' element={<PrivateRoute><EditProfile /></PrivateRoute>} />
          <Route path='/attempt/:quizKey' element={<StartQuiz />} />
          <Route path='/quiz/:quizKey' element={<Quiz url='http://localhost:4000/api/quizzes' />} />
        </Routes>
      </QuizProvider>
    </Container>
    </Router>
  </ThemeProvider>
);
