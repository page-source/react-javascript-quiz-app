import React from 'react';
class Question extends React.PureComponent{
	render () {
		return <div className="lead question">
			<h3>{this.props.data}</h3>
		</div>
	}
}

export default Question;