import React from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';

function shuffleArray(array) {
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
	    this.refreshQuestion = this.refreshQuestion.bind(this)
	    this.state = {
	    	change:false
	    }
	}
	refreshQuestion(){
		console.log(this);
		this.setState({
			change:true
		})
	}
	render () {
		var shuffledPosts = shuffleArray(this.props.data);
		return <div>
			<div className="row posRelative">
				<div className="col-md-10">
					<Question data={shuffledPosts[0].question} />
				</div>
					<Options data={(shuffledPosts[0])} />


			</div>
			<div className="col-md-10 noPadRight">
				<button onClick={this.refreshQuestion} className="marTop25 nextBtn btn col-md-2 pull-right">Next Question</button>
			</div>
		</div>; 
	}
}
class Question extends React.Component{
	render () {
		return <div className="lead question">
			<h3>{this.props.data}</h3>
		</div>
	}
}

class Options extends React.Component{
	constructor(props) {
	    super(props)
	    this.state = {
	    	bgClass :'neutral'
	    }
	  }
	handleClick (valClicked){
		var isCorrect = valClicked.value === this.props.data.key;
		this.setState({
			bgClass : isCorrect ? 'pass' : 'fail',
			showContinue: isCorrect
		})
	 }
	 componentWillReceiveProps(nextProps){
	 	this.setState({
			bgClass : 'neutral'
		})
	 }
	render () {
		var options = this.props.data.options;
        return (
            <div>
	            <div className="col-md-10">
	                {options.map((value, index) => {
	                    return <div onClick={this.handleClick.bind(this,{value})} className="strong options" key={index}>
	                    	<h4> {index+1}. {value} </h4>
	                    </div>;
	                  } , this)}
	            </div>
                <Answer className={this.state.bgClass}/>
            </div>
        )
	}
}

class Answer extends React.Component{
	// constructor(props){
	// 	super(props);
	// }
	render(){
		return 	<div className={this.props.className + ' col-md-1'}> </div>
	}

}

var data = [
	{
		question: "What is the Javscript compiler name in Google Chrome?",
		options: ["Chrome V6", "Chrome V7","Chrome V8","Chrome V9"],
		key: "Chrome V8"
	},
	{
		question: "How can you detect the client's browser name?",
		options: ["navigator.userAgent", "navigator.browser","browser.appName" ,"app.browserName"],
		key: "navigator.userAgent"
	},
	{
		question: "Nearly all objects in JavaScript are instances of which of the following?",
		options: ["Object", "_proto_","Prototypes" ,"DOM"],
		key: "Object"
	},
	{
		question: "Which of the following is a correct way to empty an array?",
		options: ["arrayName.empty();", "arrayName.splice(0, arrayList.length);","arrayName = null;" ,"arrayName = Obejct.empty();"],
		key: "arrayName.splice(0, arrayList.length);"
	},
	{
		question: "Which of the following is not a React Component Lifecycle method?",
		options: ["componentWillUpdate ", "componentDidUpdate ","componentWillUnmount " ,"componentGoingToUpdate"],
		key: "componentGoingToUpdate"
	},
	{
		question: "In Experience Technology world, What does MEAN stand for?",
		options: [	"Mongodb, ES6, Angularjs and Node",
					"Mongodb, Ember, Angularjs and Node" ,
					"Mongodb, Express, Angularjs and Node",
					"Meteor, Express, Angularjs and Node"],
		key: 		"Mongodb, Express, Angularjs and Node"
	}
]

// Quiz.PropTypes = {
// 	books: PropTypes.bool.isRequired,
// }
// Book.PropTypes = {
// 	b: PropTypes.string
// }

ReactDOM.render(<Quiz data={data} />, document.getElementById('root'));
