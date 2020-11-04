import React, { Component } from 'react';
import FilingStatus from './filingStatus';
import Children, { Choose } from './choose';
import Confirm from './confirm';
import TaxPayerInfo from './taxPayerInfo';
import Success from './success';

export class Form extends Component {
    state = {
        step: 1,
        firstName:'',
        lastName:'',
        middleInitial:'',
        occupation:'',
        socialId:'',
        birth:'',
        streetAddress:'',
        aptNo:'',
        city:'',
        state:'',
        zip:'',
        filingStatus:''
    };



    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step } = this.state;
        const {firstName,lastName,middleInitial,occupation,socialId,birth,streetAddress,aptNo,city,state,zip,filingStatus} = this.state;
        const values = { firstName,lastName,middleInitial,occupation,socialId,birth,streetAddress,aptNo,city,state,zip,filingStatus};

        switch (step) {
            case 1:
                return(
                    <Choose 
                        nextStep={this.nextStep}
                    />
                );
            case 2:
                return (
                    <TaxPayerInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <FilingStatus
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
          
            case 4:
                return (
                    <Confirm  
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 5:
                return(
                    <Success />  
                );
            default:
        }
    }
}

export default Form
