import React, { Component } from 'react';
import FilingStatus from './filingStatus';
import Choose from './choose';
import Confirm from './confirm';
import TaxPayerInfo from './taxPayerInfo';
import Success from './success';
import DependentAsk from './dependentAsk';
import Dependent from './dependent';
import Spouse from './spouse';

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
        filingStatus:'',
        dependentFirstName:'',
        dependentLastName:'',
        dependentMiddleInitial:'',
        dependentSocialId:'',
        dependentBirth:'',
        spouseFirstName:'',
        spouseLastName:'',
        spouseMiddleInitial:'',
        spouseSocialId:'',
        spouseBirth:'',
    };


    confirmPage = () =>{
        this.setState({step: 7});
    }
    doubleStep = () =>{
        const { step } = this.state;
        this.setState({step: step + 2 })
    }
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
        const {firstName,lastName,middleInitial,occupation,socialId,birth,streetAddress,aptNo,city,state,zip,filingStatus,dependentFirstName,dependentLastName,dependentMiddleInitial,dependentSocialId,dependentBirth,spouseFirstName,spouseLastName,spouseMiddleInitial,spouseSocialId,spouseBirth} = this.state;
        const values = { firstName,lastName,middleInitial,occupation,socialId,birth,streetAddress,aptNo,city,state,zip,filingStatus,dependentFirstName,dependentLastName,dependentMiddleInitial,dependentSocialId,dependentBirth,spouseFirstName,spouseLastName,spouseMiddleInitial,spouseSocialId,spouseBirth};

        switch (step) {
            case 1:
                return(
                    <Choose 
                        confirmPage={this.confirmPage}
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
                        doubleStep={this.doubleStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 4:
                return(
                    <Spouse 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                     
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 5:
                return(
                    <DependentAsk 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        confirmPage={this.confirmPage}
                        values={values}
                    />
                );
            case 6:
                return(
                    <Dependent 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 7:
                return (
                    <Confirm  
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 8:
                return(
                    <Success />  
                );
            default:
        }
    }
}

export default Form
