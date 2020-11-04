import React, { Component } from 'react'
import '../css/taxPayerInfo.css'
import {Form , Button , Col , Container , ToggleButton , ToggleButtonGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export class FilingStatus extends Component {

    state = {
        radio: 0
      }
      
    onCheck = (nr) => () => {
        this.setState({
          radio: nr
        });

    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div id="filingStatusMainDiv"  className="form-container" >
            <Container>
                <div id="formLabel" className="text-center">Filing Status</div>
                <hr />
                <Form>
                    <label id="filingLabel">Choose your filing status.</label>
                    <div className="radio ml-2 p-2">
                            <label>
                                <input  name="Single" onClick={this.onCheck(1)} onChange={inputChange('filingStatus') }  checked={this.state.radio===1 ? true : false}  type="radio"
                                     id="Single" />
                                Single
                            </label>
                   </div>
                   <div className="radio  ml-2 p-2">
                            <label>
                                <input  value="option2" onClick={this.onCheck(2)} checked={this.state.radio===2 ? true : false}  type="radio"
                                     id="radio2" />
                                Married Filing Jointly
                            </label>
                   </div>
                   <div className="radio  ml-2 p-2">
                            <label>
                                <input  value="option3" onClick={this.onCheck(3)} checked={this.state.radio===3 ? true : false}  type="radio"
                                     id="radio3" />
                               Married Filing Separately
                            </label>
                    </div>
                    <div className="radio ml-2 p-2">
                            <label>
                                <input  value="option4" onClick={this.onCheck(4)} checked={this.state.radio===4 ? true : false}  type="radio"
                                     id="radio4" />
                                Head of Household
                            </label>
                   </div>
                   <div className="radio  ml-2 p-2">
                            <label>
                                <input  value="option5" onClick={this.onCheck(5)} checked={this.state.radio===5 ? true : false}  type="radio"
                                     id="radio5" />
                                 Qualifying Widow(er)
                            </label>
                   </div>
                   <div className="radio  ml-2 p-2">
                            <label>
                                <input  value="option6" onClick={this.onCheck(6)} checked={this.state.radio===6 ? true : false}  type="radio"
                                     id="radio6" />
                                I'm not sure - help me decide
                            </label>
                    </div>
                    <hr />
                    <Button className="float-right"  id="nextBtn" onClick={this.continue}>Save and Continue</Button>
                    <Button className="float-left" id="backBtn" onClick={this.back}>Previous Page</Button>
                </Form>
            </Container>
         </div>
        );
    }
}

export default FilingStatus
