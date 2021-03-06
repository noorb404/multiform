import React, { Component } from 'react'
import {Form , Button ,Container} from 'react-bootstrap';


//THIS PAGE IS FOR FILLING STATUS -- SINGLE , MARIED ..


export class FilingStatus extends Component {

    state = {
        radio: 0,
        check:false
      }
      
    onCheck = (nr) => () => {
        this.setState({
          radio: nr
        });
        
        
    }
    continue = e => {
        if(this.state.radio===2 || this.state.radio===3){
            this.props.statusInput(false);
            e.preventDefault();
            this.props.nextStep();
        }
        else{
            this.props.statusInput(true);
            this.props.doubleNextStep();
        }
       
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {inputChange } = this.props;

        return (
            <div id="filingStatusMainDiv"  className="form-container" >
            <Container>
                <div id="formLabel" className="text-center">Filing Status</div>
                <hr />
                <Form>
                    <label id="filingLabel">Choose your filing status.</label>
                    <div className="radio  p-2">
                            <label id="filingStatusRadioLabels">
                                <input  onClick={this.onCheck(1)} onChange={inputChange('filingStatus') } value="Single" checked={this.state.radio===1 ? true : false}  type="radio"
                                     id="Single" />
                                Single
                            </label>
                   </div>
                   <div className="radio   p-2">
                            <label id="filingStatusRadioLabels">
                                <input   onClick={this.onCheck(2)} onChange={inputChange('filingStatus') } value="Married Filing Jointly" checked={this.state.radio===2 ? true : false}  type="radio"
                                     id="MarriedJointly" />
                                Married Filing Jointly
                            </label>
                   </div>
                   <div className="radio   p-2">
                            <label id="filingStatusRadioLabels">
                                <input   onClick={this.onCheck(3)} onChange={inputChange('filingStatus') } value="Married Filing Separately" checked={this.state.radio===3 ? true : false}  type="radio"
                                     id="MarriedSeparately" />
                               Married Filing Separately
                            </label>
                    </div>
                    <div className="radio  p-2">
                            <label id="filingStatusRadioLabels">
                                <input   onClick={this.onCheck(4)} onChange={inputChange('filingStatus') } value="Head of Household" checked={this.state.radio===4 ? true : false}  type="radio"
                                     id="HeadofHousehold" />
                                Head of Household
                            </label>
                   </div>
                   <div className="radio   p-2">
                            <label id="filingStatusRadioLabels">
                                <input   onClick={this.onCheck(5)} onChange={inputChange('filingStatus') } value="Qualifying Widow(er)" checked={this.state.radio===5 ? true : false}  type="radio"
                                     id="Qualifyingwidow" />
                                 Qualifying Widow(er)
                            </label>
                   </div>
                    <hr />
                    <Button   id="nextBtn" onClick={this.continue}>Save and Continue</Button>
                    <Button id="backBtn" onClick={this.back}>Previous Page</Button>
                </Form>
            </Container>
         </div>
        );
    }
}

export default FilingStatus
