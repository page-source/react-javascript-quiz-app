import React from 'react';
import {Link , Redirect} from 'react-router-dom';
import axios from 'axios';
class AddQuestion extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            question: '', 
            option1: '', 
            option2: '',
            option3:'',
            option4:'',
            key:'',
            fireRedirect:false
        };
        this.handleQuestion =   this.handleQuestion.bind(this);
        this.handleOption1  =   this.handleOption1.bind(this);
        this.handleOption2  =   this.handleOption2.bind(this);
        this.handleOption3  =   this.handleOption3.bind(this);
        this.handleOption4  =   this.handleOption4.bind(this);
        this.handleKey      =   this.handleKey.bind(this);
        this.handleSubmit   =   this.handleSubmit.bind(this);
    }
    handleQuestion(e) {
        this.setState({ question: e.target.value });
    }
    handleOption1(e) {
        this.setState({ option1: e.target.value });
    }
    handleOption2(e){
        this.setState({ option2: e.target.value });
    }
    handleOption3(e){
        this.setState({ option3: e.target.value });
    }
    handleOption4(e){
        this.setState({ option4: e.target.value });
    }
    handleKey(e){
        this.setState({ key: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        let question =  this.state.question.trim();
        let option1 =   this.state.option1.trim();
        let option2 =   this.state.option2.trim();
        let option3 =   this.state.option3.trim();
        let option4 =   this.state.option4.trim();
        let key     =   this.state.key.trim();

        if (!question || !option1 || !option2 || !option3 || !option4 || !key) {
            return;
        }
        const dataPassed =  {   question: question, 
                                options : [option1, option2, option3, option4],
                                key     : key 
                            };
        axios.post(this.props.url, dataPassed)
            .then(res => {
                this.setState({ fireRedirect: true })

        })

        this.setState({ name: '', age: '', nationality:'', place:"" });
    }

    render() {
      		return <div className="container">
                        <div className="marBot40"> 
                            <h2 className="inline">Add a Question</h2>
                            <Link to="/"><button className="nextBtn btn col-md-2 pull-right">Go Back</button></Link>
                        </div>  
                        <form className="form-horizontal"  onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="question">Question:</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type='text' placeholder='Question..' name="question" onChange={this.handleQuestion} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="pwd">Option 1:</label>
                                <div className="col-sm-10">          
                                    <input type="text" className="form-control" placeholder='Option 1..'  name="Option 1" onChange={this.handleOption1} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="pwd">Option 2:</label>
                                <div className="col-sm-10">          
                                    <input type="text" className="form-control" placeholder='Option 2..'  name="Option 2" onChange={this.handleOption2} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="pwd">Option 3:</label>
                                <div className="col-sm-10">          
                                    <input type="text" className="form-control" placeholder='Option 3..'  name="Option 3" onChange={this.handleOption3} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="pwd">Option 4:</label>
                                <div className="col-sm-10">          
                                    <input type="text" className="form-control" placeholder='Option 4..'  name="Option 4" onChange={this.handleOption4} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="pwd">Correct Answer:</label>
                                <div className="col-sm-10">          
                                    <input type="text" className="form-control" placeholder='Correct Answer Number (one of 1,2,3,4 from above)..' name="Key" onChange={this.handleKey} />
                                </div>
                            </div>

                            <div className="form-group">        
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" value='Post' className="btn btn-default">Submit</button>
                                </div>
                            </div>
                        </form>
                        {console.log(this.state.fireRedirect)}
                        {this.state.fireRedirect && (
                            <Redirect to='/questionAdded'/>
                        )}
                    </div>

      		}
    }

export default AddQuestion;