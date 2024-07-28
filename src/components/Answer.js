import React from 'react';
import PropTypes from 'prop-types';
class Answer extends React.PureComponent {
  // constructor(props){
  // 	super(props);
  // }
  render() {
    return <div className={`${this.props.classApply} col-md-1`}> </div>;
  }
}

Answer.propTypes = {
  classApply: PropTypes.string,
};

export default Answer;
