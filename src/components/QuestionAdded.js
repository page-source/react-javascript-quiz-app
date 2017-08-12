import React from 'react';

class QuestionAdded extends React.PureComponent{

	render(){
		return <div className={"col-md-10 questionAdded " +this.props.classApply}>
					<h3> Question Added Successfully!</h3>
					<img alt="successfully added" src="./../../../_assets/images/tick.png" />
					<div className="col-md-12 moreOptions">
						<button onClick={this.props.addQuestionAgain} className="marTop25 marRight100 btn col-md-3">Add Another Question</button>
						<button onClick={this.props.playQuiz} className="marTop25 btn col-md-2">Play Quiz</button>

					</div>
				</div>
	}
}

export default QuestionAdded;