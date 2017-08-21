import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';

import Quiz from './components/Quiz.js';
import QuestionForm from './FormComponents/QuestionForm.js';
import QuestionAdded from './components/QuestionAdded.js';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" render={props => 
                <Quiz url='http://localhost:3001/api/questions' {...props} />
            }/>
            <Route exact path="/addQuestion" render={props => 
                <QuestionForm url='http://localhost:3001/api/questions'/>
            }/>
             <Route exact path="/questionAdded" render={props => 
                <QuestionAdded />
            }/>
		</div>
	</Router>,
	document.getElementById('root')	
);
