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
                <label>Let's make sure your personal information is correct.</label>

               <Form>
                   
                   <Form.Row>
                        <div id="confirmlb">YOUR INFORMATION</div>  
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

                    { dependentFirstName ? (
                     <div>
                        <hr />
                        <Form.Row>
                                    <div style={{ textTransform: 'uppercase' , fontSize:'x-large' , color:'rgb(59, 142, 80)'}}>{dependentFirstName} Information</div>  
                        </Form.Row>
                        <hr id="heavyHr" />
                        <Form.Row>
                                <label style={{fontWeight:"bold",color:"gray" , marginLeft:'5px', paddingRight:'10px'}}>Name : </label>
                                <label style={{ textTransform: 'uppercase'}}> {dependentFirstName} {dependentMiddleInitial} {dependentLastName} </label>
                        </Form.Row>
                        <Form.Row>
                                <label style={{fontWeight:"bold",color:"gray", marginLeft:'5px' , paddingRight:'10px'}}>Social Security Number: </label>
                                <label> {dependentSocialId} </label>
                        </Form.Row>
                        <Form.Row>
                                <label style={{fontWeight:"bold",color:"gray", marginLeft:'5px' , paddingRight:'10px'}}>Date Of Birth: </label>
                                <label> {dependentBirth} </label>
                        </Form.Row>
                        </div>
                    )
                     :  null }

                    

                { spouseFirstName ? (
                     <div>
                        <hr />
                        <Form.Row>
                                    <div style={{ textTransform: 'uppercase' , fontSize:'x-large' , color:'rgb(59, 142, 80)'}}>{spouseFirstName} Information</div>  
                        </Form.Row>
                        <hr id="heavyHr" />
                        <Form.Row>
                                <label style={{fontWeight:"bold",color:"gray" , marginLeft:'5px', paddingRight:'10px'}}>Name : </label>
                                <label style={{ textTransform: 'uppercase'}}> {spouseFirstName} {spouseMiddleInitial} {spouseLastName} </label>
                        </Form.Row>
                        <Form.Row>
                                <label style={{fontWeight:"bold",color:"gray", marginLeft:'5px' , paddingRight:'10px'}}>Social Security Number: </label>
                                <label> {spouseSocialId} </label>
                        </Form.Row>
                        <Form.Row>
                                <label style={{fontWeight:"bold",color:"gray", marginLeft:'5px' , paddingRight:'10px'}}>Date Of Birth: </label>
                                <label> {spouseBirth} </label>
                        </Form.Row>
                        </div>
                    )
                     :  null }

                    <Button className="float-right" id="confirmBtn" onClick={this.continue}>Confirm</Button>
                    <Button className="float-left" id="backBtn" onClick={this.back}>Previous Page</Button>
                </Form>
            </Container>
            </div>
        )
    }
}

export default Confirm
