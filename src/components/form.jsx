import React, { Component } from 'react';
import FilingStatus from './filingStatus';
import Children from './children';
import Confirm from './confirm';
import TaxPayerInfo from './taxPayerInfo';

export class Form extends Component {
    state = {
        step: 1,
        firstName:'',
        lastName:'',
        middleInitial:'',
        occupation:'',
        socialId:'',
        birth:'',
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
        const {firstName,lastName,middleInitial,occupation,socialId,birth } = this.state;
        const values = { firstName,lastName,middleInitial,occupation,socialId,birth};

        switch (step) {
            case 1:
                return (
                    <TaxPayerInfo
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FilingStatus
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
          
            case 3:
                return (
                    <Confirm  
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            default:
        }
    }
}

export default Form
