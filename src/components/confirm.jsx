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
            values: {firstName,lastName,middleInitial,occupation,socialId,birth,streetAddress,aptNo,city,state,zip,filingStatus}
        } = this.props;

        return (
            <div id="confirmDiv" className="form-container">
            <Container>
                <div id="formLabel" className="text-center">Personal Information Summary</div>
                <hr />
                <label>Let's make sure your personal information is correct.</label>

               <Form>
                   <Form.Row>
                        <div id="confirmlb">Your Information</div>
                       
                   </Form.Row>
                   <hr id="heavyHr" />
                   <Form.Row>
                         <label style={{fontWeight:"bold",color:"gray" , marginLeft:'5px', paddingRight:'10px'}}>Name : </label>
                         <label style={{ textTransform: 'uppercase'}}> {firstName} {middleInitial} {lastName} </label>
                   </Form.Row>
                   <Form.Row>
                         <label style={{fontWeight:"bold",color:"gray", marginLeft:'5px' , paddingRight:'10px'}}>Occupation : </label>
                         <label> {occupation} </label>
                   </Form.Row>
                   <Form.Row>
                         <label style={{fontWeight:"bold",color:"gray", marginLeft:'5px' , paddingRight:'10px'}}>Social Security Number: </label>
                         <label> {socialId} </label>
                   </Form.Row>
                   <Form.Row>
                         <label style={{fontWeight:"bold",color:"gray", marginLeft:'5px' , paddingRight:'10px'}}>Date Of Birth: </label>
                         <label> {birth} </label>
                   </Form.Row>
                   <Form.Row>
                         <label style={{fontWeight:"bold",color:"gray", marginLeft:'5px' , paddingRight:'10px'}}>Address: </label>
                         <label> {streetAddress}  {aptNo}  , {city} , {state} {zip}</label>
                   </Form.Row>
                    <hr/>
                    <Form.Row>
                         <label style={{fontWeight:"bold",color:"gray", marginLeft:'5px' , paddingRight:'10px'}}>Filing Status: </label>
                         <label> {filingStatus} </label>
                    </Form.Row>
                    <Button className="float-right" id="nextBtn" onClick={this.continue}>Confirm</Button>
                    <Button className="float-left" id="backBtn" onClick={this.back}>Previous Page</Button>
                </Form>
            </Container>
            </div>
        )
    }
}

export default Confirm
