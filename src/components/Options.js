import React from 'react';
import Answer from './Answer.js';
class Options extends React.PureComponent{
	constructor(props) {
	    super(props)
	    this.state = {
	    	bgClass :'neutral'
	    }
	  }
	handleClick (valClicked){
		var isCorrect = (valClicked.index+1) === this.props.data.key;
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
	                    return <div onClick={this.handleClick.bind(this,{index})} className="strong options" key={index}>
	                    	<h4> {index+1}. {value} </h4>
	                    </div>;
	                  } , this)}
	            </div>
                <Answer classApply={this.state.bgClass}/>
            </div>
        )
	}
}

export default Options;