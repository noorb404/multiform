import React, { Component } from 'react';
import {Button } from 'react-bootstrap';

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
            <div className="form-container">
                <h1 className="mb-5">Confirm</h1>
                <ul class="list-group">
                    <li class="list-group-item">Name: {lastName} {middleInitial} {firstName} </li>
                    <li class="list-group-item">Occupation: {occupation}</li>
                    <li class="list-group-item">Social Security Number: {socialId}</li>
                    <li class="list-group-item">Date Of Birth: {birth}</li>
                </ul>

                <br /><br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <Button className="float-right" onClick={this.continue}>Save and Continue</Button>
                        <Button className="float-left" id="backBtn" onClick={this.back}>Previous Page</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirm
