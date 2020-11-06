import React, { Component } from 'react';
import {Button, Container, Form } from 'react-bootstrap';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: {firstName,lastName,middleInitial,occupation,socialId,birth,streetAddress,aptNo,city,state,zip,filingStatus,dependentFirstName,dependentLastName,dependentMiddleInitial,dependentSocialId,dependentBirth,spouseFirstName,spouseLastName,spouseMiddleInitial,spouseSocialId,spouseBirth}
        } = this.props;

        return (
            <div id="confirmDiv" className="form-container">
            <Container>
                <div id="formLabel" className="text-center">Personal Information Summary</div>
                <hr />
                <label id="confirmLabels" >Let's make sure your personal information is correct.</label>

               <Form>
                   
                   <Form.Row>
                        <div id="confirmlb">YOUR INFORMATION</div>  
                   </Form.Row>
                   <hr id="heavyHr" />
                   <Form.Row>
                         <label  className="confirmIdLabels">Name : </label>
                         <label className="confirmIdLabelsAnswer" style={{ textTransform: 'uppercase'}}> {firstName} {middleInitial} {lastName} </label>
                   </Form.Row>
                   <Form.Row>
                         <label className="confirmIdLabels">Occupation : </label>
                         <label className="confirmIdLabelsAnswer"> {occupation} </label>
                   </Form.Row>
                   <Form.Row>
                         <label className="confirmIdLabels">Social Security Number: </label>
                         <label className="confirmIdLabelsAnswer"> {socialId} </label>
                   </Form.Row>
                   <Form.Row>
                         <label className="confirmIdLabels">Date Of Birth: </label>
                         <label className="confirmIdLabelsAnswer"> {birth} </label>
                   </Form.Row>
                   <Form.Row>
                         <label className="confirmIdLabels">Address: </label>
                         <label className="confirmIdLabelsAnswer"> {streetAddress}  {aptNo}   {city}  {state} {zip}</label>
                   </Form.Row>
                    <hr/>
                    <Form.Row>
                         <label className="confirmIdLabels">Filing Status: </label>
                         <label className="confirmIdLabelsAnswer"> {filingStatus} </label>
                    </Form.Row>

                    { dependentFirstName ? (
                     <div>
                        <hr />
                        <Form.Row>
                                    <div id="confirmlb">{dependentFirstName} Information</div>  
                        </Form.Row>
                        <hr id="heavyHr" />
                        <Form.Row>
                                <label className="confirmIdLabels">Name : </label>
                                <label className="confirmIdLabelsAnswer" style={{ textTransform: 'uppercase'}}> {dependentFirstName} {dependentMiddleInitial} {dependentLastName} </label>
                        </Form.Row>
                        <Form.Row>
                                <label className="confirmIdLabels">Social Security Number: </label>
                                <label className="confirmIdLabelsAnswer"> {dependentSocialId} </label>
                        </Form.Row>
                        <Form.Row>
                                <label className="confirmIdLabels">Date Of Birth: </label>
                                <label className="confirmIdLabelsAnswer"> {dependentBirth} </label>
                        </Form.Row>
                        </div>
                    )
                     :  null }

                    

                { spouseFirstName ? (
                     <div>
                        <hr />
                        <Form.Row>
                                    <div id="confirmlb">{spouseFirstName} Information</div>  
                        </Form.Row>
                        <hr id="heavyHr" />
                        <Form.Row>
                                <label className="confirmIdLabels">Name : </label>
                                <label className="confirmIdLabelsAnswer" style={{ textTransform: 'uppercase'}}> {spouseFirstName} {spouseMiddleInitial} {spouseLastName} </label>
                        </Form.Row>
                        <Form.Row>
                                <label className="confirmIdLabels">Social Security Number: </label>
                                <label className="confirmIdLabelsAnswer"> {spouseSocialId} </label>
                        </Form.Row>
                        <Form.Row>
                                <label className="confirmIdLabels">Date Of Birth: </label>
                                <label className="confirmIdLabelsAnswer"> {spouseBirth} </label>
                        </Form.Row>
                        </div>
                    )
                     :  null }
                    <hr />
                    <Button  id="confirmBtn" onClick={this.continue}>Confirm</Button>
                    <Button id="backBtn" onClick={this.back}>Previous Page</Button>
                </Form>
            </Container>
            </div>
        )
    }
}

export default Confirm
