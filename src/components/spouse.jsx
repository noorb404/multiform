import React, { Component } from 'react'
import '../css/taxPayerInfo.css'
import {Form , Button , Col , Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export class Spouse extends Component {

   state = {
       Validated : false
   };

  //check if the form validation .. TODO check birthday +18 
  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (form.checkValidity() === true) {
        this.continue(event);
      }

    this.setState({
        Validated:true
    });
  };

  //next step -> next screen 
  continue = e => {
        e.preventDefault();
        this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
};

    render() {
        const { values, inputChange } = this.props;

        return (

          <div id="infoDiv"  className="form-container">
            <Container> 
              <div id="formLabel" className="text-center"> Taxpayer Information </div>
              <hr />
                  <Form noValidate validated={this.state.Validated} onSubmit={this.handleSubmit}>
                  <Form.Row>
                          <Form.Group as={Col} md="5" controlId="spouseFirstName">
                            <Form.Label>First name:</Form.Label>
                            <Form.Control
                              required
                              name="spouseFirstName"
                              onChange={inputChange('spouseFirstName')} 
                              value={values.spouseFirstName}
                              type="text"
        
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4" controlId="spouseMiddleInitial">
                            <Form.Label>Middle Initial:</Form.Label>
                            <Form.Control
                    
                              name="spouseMiddleInitial"
                              onChange={inputChange('spouseMiddleInitial')}
                              value={values.spouseMiddleInitial}
                              type="text"
                            />
                          </Form.Group>
                    </Form.Row>


                    <Form.Row>
                          <Form.Group as={Col} md="5" controlId="spouseLastName">
                            <Form.Label>Last name:</Form.Label>
                            <Form.Control
                              required
                              name="spouseLastName"
                              onChange={inputChange('spouseLastName')}
                              value={values.spouseLastName}
                              type="text"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>Jr., Sr., III:</Form.Label>
                            <Form.Control as="select" custom>
                              <option disabled selected>Choose an option</option>
                              <option>JR</option>
                              <option>SR</option>
                              <option>II</option>
                              <option>III</option>
                              <option>IV</option>
                              <option>V</option>
                              <option>VI</option>
                            </Form.Control>
                        </Form.Group>
                         
                    </Form.Row>


                    <Form.Row>
                          <Form.Group as={Col} md="5" controlId="spouseSocialId">
                            <Form.Label>Social Security Number:</Form.Label>
                            <Form.Control
                              required
                              name="spouseSocialId"
                              onChange={inputChange('spouseSocialId')}
                              value={values.spouseSocialId}
                              type="text"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4" controlId="spouseBirth">
                            <Form.Label>Date of Birth:</Form.Label>
                            <Form.Control
                              required
                              name="spouseBirth"
                              onChange={inputChange('spouseBirth')}
                              value={values.spouseBirth}
                              type="date"
                            />
                          </Form.Group>
                    </Form.Row>
                    <hr />


                      <Form.Check 
                            type="switch"
                            id="switch1"
                            label="Can a parent (or somebody else) claim you as a dependent on their tax return?"
                          />

                      <Form.Check 
                            type="switch"
                            id="switch2"
                            label="Do you want to contribute $3 to the Presidential Election Campaign Fund?"
                          />
                      <Form.Check 
                            type="switch"
                            id="switch3"
                            label="Is this person legally blind?"
                          />
                      <Form.Check 
                            type="switch"
                            id="switch4"
                            label="Has this person passed away before the filing of this tax return?"
                          />
                      <Form.Check 
                            type="switch"
                            id="switch5"
                            label="Were you impacted by a qualified disaster in 2019?"
                          />


                    <hr />
                  
                    <Button className="float-right"  id="nextBtn" type="submit">Save and Continue</Button>
                    <Button className="float-left" id="backBtn" onClick={this.back}>Cancel</Button>
                  </Form>
                </Container>
            </div>
        )
    }
}

export default Spouse
