import React from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';

function shuffleArray(array) {
	//if(typeof array !== 'object') return;
	let i = array.length - 1;
	for (; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}
class Quiz extends React.Component{
	constructor(props, context) {
	    super(props, context);
   
	}
	render () {
		var shuffledPosts = shuffleArray(this.props.data);
		console.log(shuffledPosts[0]);
		return <div>
			<div className="row">
				<div className="col-md-10">
						<Question data={shuffledPosts[0].question} />

						
						<Options data={shuffleArray(shuffledPosts[0].options)} />
				</div>
				<div className="col-md-2">

				</div>
			</div>
		</div>; 
	}
}
class Question extends React.Component{
	render () {
	//shuffledPosts[0].answer is the answer
		return <div className="lead question">
			<h3>{this.props.data}</h3>
		</div>
	}
}

class Options extends React.Component{
	render () {
	//console.log(this.props.data)
		// return <div className="option">
		// 	<h4>{this.props.data}</h4>
		// </div>

		var options = this.props.data;
        return (
            <div>
                {options.map(function(value, index){
                	console.log(index)	
                    return <div className="strong options" key={ index }>
                    	<h4> {index+1}. {value} </h4>
                    </div>;
                  })}
            </div>
        )
	}
}

// Quiz.PropTypes = {
// 	books: PropTypes.bool.isRequired,
// }
// Book.PropTypes = {
// 	b: PropTypes.string
// }

var data = [
	{
		question: "What is the Javscript compiler name in Google Chrome?",
		options: ["Chrome V8", "Chrome V7","Chrome V9" ,"Chrome V6"],
		answer: "Chrome V8"
	},
	{
		question: "How can you detect the client's browser name?",
		options: ["navigator.userAgent", "navigator.browser","browser.appName" ,"app.browserName"],
		answer: "I am answer 2"
	},
	{
		question: "Nearly all objects in JavaScript are instances of which of the following?",
		options: ["Object", "_proto_","Prototypes" ,"DOM"],
		answer: "I am answer 3"
	}
]
ReactDOM.render(<Quiz data={data} />, document.getElementById('root'));
