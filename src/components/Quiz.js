import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Question from './Question.js';
import Options from './Options.js';
//let data = require('./data.js'); //this imports data from local file, pass it as a prop to Quiz component

const shuffleArray = array => {
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
	    this.state = {
	    	data:""
	    }
		this.loadQuestionsFromServer = this.loadQuestionsFromServer.bind(this);
	}
	loadQuestionsFromServer() {
		fetch(this.props.url)
			.then(res => res.json())
			.then(data=>{
		    	this.setState({ data });
			})
    }

	componentWillMount() {
		this.loadQuestionsFromServer();
    }

	render () {
		if(this.state.data==="" || this.state.data===undefined || this.state.data===null){
    		return false;
    	}
		var shuffledPosts = shuffleArray(this.state.data);
		return <div>
			<div className="row posRelative">
				<div className="col-md-10">
					<Question data={shuffledPosts[0].question} />
				</div>
					<Options data={(shuffledPosts[0])} />
			</div>
			<div className="col-md-10 noPad">
				<Link to="/"><button className="marTop25 nextBtn btn pull-right">Next Question</button></Link>
				<Link to="/addQuestion"><button className="marTop25 nextBtn btn pull-left">Add Question</button></Link>
			</div>
		</div>; 
	}
}


// Quiz.PropTypes = {
// 	books: PropTypes.bool.isRequired,
// }
// Book.PropTypes = {
// 	b: PropTypes.string
// }

export default Quiz;