import {combineReducers} from 'redux';
import addQuestion from './addQuestionReducer';
import selectedAnswerReducer from './selectedAnswerReducer';
const rootReducer = combineReducers({
	addQuestion,
	selectedAnswerReducer
});

export default rootReducer;