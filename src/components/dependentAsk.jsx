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
            <div id="dependentDivAsk" className="form-container">
            <Container>
                <div id="formLabel" className="text-center">Dependents and Qualifying Children</div>
                <hr/>
               <Form>
                   
                   <Form.Row>  
                        <div style={{width:'100%'}}><label>Do you have any dependents or qualifying children?</label></div>
                        <label style={{fontSize:'small', color:'gray'}}>If you aren't sure if someone qualifies, answer Yes and we'll help you figure it out.</label>

                   </Form.Row>
                   
                    <hr/>
          
                         <Button  id="nextBtn" onClick={no} type="submit">No, Continue</Button>
                         <Button  id="yesBtn" onClick={yes}>Yes</Button>
                         <Button  id="backBtn" onClick={back}>Previous Page</Button>
                         
                       
                   
                
                </Form>
            </Container>
            </div>
        )
    
}

export default DependentAsk
