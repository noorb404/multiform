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
            values: {firstName,lastName,middleInitial,occupation,socialId,birth}
        } = this.props;

        return (
            <div id="confirmDiv" className="form-container">
            <Container>
                <div id="formLabel" className="text-center">Confirm</div>
                <hr />
               <Form>
                   <Form.Row>
                        <ul class="list-group">
                            <li class="list-group-item">Name: dsaddasdasd{lastName} {middleInitial} {firstName} </li>
                            <li class="list-group-item">Occupation: ssssssssssssssssssssssssss{occupation}</li>
                            <li class="list-group-item">Social Security Number: ssssssssssssssss{socialId}</li>
                            <li class="list-group-item">Date Of Birth: {birth}</li>
                        </ul>
                   </Form.Row>
                    <hr/>
                    <Button className="float-right" onClick={this.continue}>Save and Continue</Button>
                    <Button className="float-left" id="backBtn" onClick={this.back}>Previous Page</Button>
                </Form>
            </Container>
            </div>
        )
    }
}

export default Confirm
