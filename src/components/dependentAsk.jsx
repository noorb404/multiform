import React, { Component } from 'react';
import {Button, Container, Form } from 'react-bootstrap';



const DependentAsk = props =>{


    const yes = e => {
        e.preventDefault();
        props.nextStep();
    };
    const back = e => {
        e.preventDefault();
        props.prevStep();
    };
    const no = e =>{
        props.confirmPage();
    };
 

        return (
            <div id="confirmDiv" className="form-container">
            <Container>
                <div id="formLabel" className="text-center">Dependents and Qualifying Children</div>
                <hr/>
               <Form>
                   
                   <Form.Row>  
                        <label>Do you have any dependents or qualifying children?</label>
                        <label style={{fontSize:'small', color:'gray'}}>If you aren't sure if someone qualifies, answer Yes and we'll help you figure it out.</label>

                   </Form.Row>
                   
                    <hr/>
          
                         
                         <Button className="float-left" id="backBtn" onClick={back}>Previous Page</Button>
                         <Button  className="float-right"  id="nextBtn" onClick={no} type="submit">No, Continue</Button>
                         <Button style={{marginRight:'2px'}} className="float-right" id="manuallyBtn" onClick={yes}>Yes</Button>
                       
                   
                
                </Form>
            </Container>
            </div>
        )
    
}

export default DependentAsk
