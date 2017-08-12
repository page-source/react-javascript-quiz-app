import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//import PropTypes from 'prop-types';
import AddQuestion from './forms/QuestionForm.js';
import Question from './components/Question.js';
import Options from './components/Options.js';
import QuestionAdded from './components/QuestionAdded.js';
// var app = express();
//var data = require('./data.js'); //this imports data from local file, pass it as a prop to Quiz component

var shuffleArray = array => {
	let i = array.length - 1;
	for (; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}
class Quiz extends React.PureComponent{
	constructor(props, context) {
	    super(props, context);
	    this.refreshQuestion = this.refreshQuestion.bind(this);
	    this.state = {
	    	change:false,
	    	data:"",
	    	playQuiz:'show',
	    	showQuestionForm:'hide',
	    	questionAdded : 'hide',
	    	index:0,
	    	quesadded:true
	    }
	    this.handleQuestionSubmit = this.handleQuestionSubmit.bind(this);
	    this.addQuestion = this.addQuestion.bind(this);
	    this.playQuiz = this.playQuiz.bind(this);
	    //console.log(this.props);
	    this.navigateToHome = this.navigateToHome.bind(this);
		this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
	}
	loadCommentsFromServer() {
		axios.get(this.props.url)
			.then(res => {
		    	this.setState({ data: res.data });
			})
    }
	refreshQuestion(){
		this.setState({
			change:!this.state.change
		})
	}
	addQuestion(){
		this.setState({
			playQuiz:'hide',
			showQuestionForm:'show',
			questionAdded : 'hide'
		})
	}
	playQuiz(){
		this.setState({
			playQuiz:'show',
			showQuestionForm:'hide',
			questionAdded : 'hide'
		})
	}
	componentWillMount() {
		this.loadCommentsFromServer();
    }
    handleQuestionSubmit(dataPassed) {
		axios.post(this.props.url, dataPassed)
			.then(res => {
				this.state.data.push(res.config.data);
				this.setState({
					questionAdded : 'show',
					showQuestionForm:'hide'
				});
		})
		.catch(err => {
			console.error(err);
		});
	}
	navigateToHome(){
		axios.get(this.props.url)
			.then(res => {
		    	this.setState(
		    		{ 	data: res.data ,
		    			playQuiz:'show',
						showQuestionForm:'hide'
		    		});
			})
	}
	render () {
		if(this.state.data==="" || this.state.data===undefined || this.state.data===null){
    		return false;
    	}
		var shuffledPosts = shuffleArray(this.state.data);
		console.log(this.state.data);
		return <div>
			<div className={this.state.playQuiz + ' row posRelative'}>
				<div className="col-md-10">
					<Question data={shuffledPosts[0].question} />
				</div>
					<Options data={(shuffledPosts[0])} />
			</div>
			<div className={'col-md-10 noPad ' +this.state.playQuiz}>
				<button onClick={this.refreshQuestion} className="marTop25 nextBtn btn col-md-2 pull-right">Next Question</button>
				<button onClick={this.addQuestion} className="marTop25 nextBtn btn col-md-2 pull-left">Add Question</button>
			</div>
			
			<AddQuestion goBack={this.navigateToHome} classApply={this.state.showQuestionForm} onQuestionSubmit={this.handleQuestionSubmit}/>
			<QuestionAdded classApply={this.state.questionAdded} playQuiz={this.playQuiz} addQuestionAgain={this.addQuestion}/>
		</div>; 
	}
}

// Quiz.PropTypes = {
// 	books: PropTypes.bool.isRequired,
// }
// Book.PropTypes = {
// 	b: PropTypes.string
// }

ReactDOM.render(<Quiz url='http://localhost:3001/api/people' />, document.getElementById('root'));