import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import Quiz from './components/Quiz';
import QuestionForm from './FormComponents/QuestionForm';
import QuestionAdded from './components/QuestionAdded';

const state={ addQuestion:{
                question: '', 
                option1: '', 
                option2: '',
                option3:'',
                option4:'',
                key:'',
                questionAdded:false
            },
            selectedAnswerReducer:{
                bgClass :'neutral'
            }
          };
const store = configureStore(state);

ReactDOM.render(
  <Provider store={store}>
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
  	</Router>
  </Provider>,
	document.getElementById('root')	
);
