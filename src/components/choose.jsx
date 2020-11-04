import React, { Component } from 'react';
import {Button, Container, Form } from 'react-bootstrap';

export class Choose extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };


    render() {
 

        return (
            <div id="confirmDiv" className="form-container">
            <Container>
                <div id="formLabel" className="text-center">Choose a way of identification</div>
                <hr/>
               <Form>
                   <label>Upload last year PDF file:</label>
                   <Form.Row >  
                        <input type="file" name="file" onChange={this.onChangeHandler}/>
                   </Form.Row>
                   
                    <hr/>
                    <label>Or you can manually fill out your info:</label>
                   <Form.Row>
                        <Button className="float-right" id="nextBtn" onClick={this.continue}>Fill your information manually</Button>
                   </Form.Row>
                   
                
                </Form>
            </Container>
            </div>
        )
    }
}

export default Choose
