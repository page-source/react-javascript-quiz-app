import React from 'react';
import {Link} from 'react-router-dom';

class QuestionAdded extends React.PureComponent{

	render(){
		return <div className="col-md-10 questionAdded ">
					<h3> Question Added Successfully!</h3>
					<img alt="successfully added" src="./../../../_assets/images/tick.png" />
					<div className="col-md-12 moreOptions">
						<Link to='/addQuestion' className="col-md-3"> <button className="marTop25 marRight100 btn">Add Another Question</button></Link>
						<Link to="/" className="col-md-3"> <button className="marTop25 btn">Go back to Quiz</button></Link>

					</div>
				</div>
	}
}

export default QuestionAdded;