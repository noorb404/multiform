import React, { Component } from 'react';
import {Button, Container, Form } from 'react-bootstrap';



const Choose = props =>{
  
    const hiddenFileInput = React.useRef(null);

    const onContinue = e => {
        props.nextStep();
    };
    const onChangeHandler = e =>
    {
        props.confirmPage();
    };
    const handleClick = event => {
        hiddenFileInput.current.click();
    };

 

        return (
            <div id="confirmDiv" className="form-container">
            <Container>
                <div id="formLabel" className="text-center">Choose a way of identification</div>
                <hr/>
               <Form>
                   <label>Upload last year PDF file:</label>
                   <Form.Row>  
                  
                   <Button id="manuallyBtn" style={{backgroundColor:'white', color:'black' , border:'0'}} onClick={handleClick}>
                        Upload a file
                    </Button>
                    <input
                        type="file"
                        ref={hiddenFileInput}
                        onChange={onChangeHandler}
                        style={{display: 'none'}}
                    />   
                   </Form.Row>
                   
                    <hr/>
                    <label>Or you can manually fill out your info:</label>
                   <Form.Row>
                        <Button className="float-right" id="manuallyBtn" onClick={onContinue}>Fill your information manually</Button>
                   </Form.Row>
                   
                
                </Form>
            </Container>
            </div>
        )
    
}

export default Choose
