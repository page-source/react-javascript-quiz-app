import React from 'react';
import Answer from './Answer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as answerActions from '../actions/selectedAnswerActions';
class Options extends React.PureComponent{

	handleClick (valClicked){
		let isCorrect = (valClicked.index+1) === this.props.data.key;
		isCorrect = isCorrect ? 'pass' : 'fail'

		this.props.actions.selectedAnswer(isCorrect);
	 }
	render () {
		let options = this.props.data.options;
        return (
            <div>
	            <div className="col-md-10">
	                {options.map((value, index) => {
	                    return <div onClick={this.handleClick.bind(this,{index})} className="strong options" key={index}>
	                    	<h4> {index+1}. {value} </h4>
	                    </div>;
	                  } , this)}
	            </div>
                <Answer classApply={this.props.bgClass}/>
            </div>
        )
	}
}

function mapStateToProps(state, ownProps){
    return {
        bgClass : state.selectedAnswerReducer.bgClass
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(answerActions , dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Options);