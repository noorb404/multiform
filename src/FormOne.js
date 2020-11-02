import './FormOne.css';
import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Container} from 'react-bootstrap';



import 'bootstrap/dist/css/bootstrap.min.css';





function FormPageOne() {

  const [validated, setValidated] = useState(false);
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  return (
    <div id="mainDiv" >
     <Container> 
       <div id="formLabel" className="text-center"> Taxpayer Information </div>
       <hr />
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                  <Form.Group as={Col} md="5" controlId="FirstName">
                    <Form.Label>First name:</Form.Label>
                    <Form.Control
                      required
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="MiddleInitial">
                    <Form.Label>Middle Initial:</Form.Label>
                    <Form.Control
                      required
                      type="text"
                    />
                  </Form.Group>
            </Form.Row>


            <Form.Row>
                  <Form.Group as={Col} md="5" controlId="LastName">
                    <Form.Label>Last name:</Form.Label>
                    <Form.Control
                      required
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="Occupation">
                    <Form.Label>Occupation:</Form.Label>
                    <Form.Control
                      required
                      type="text"
                    />
                  </Form.Group>
            </Form.Row>


            <Form.Row>
                  <Form.Group as={Col} md="5" controlId="SocialId">
                    <Form.Label>Social Security Number:</Form.Label>
                    <Form.Control
                      required
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="Birth">
                    <Form.Label>Date of Birth:  ( mm / dd / yyyy ):</Form.Label>
                    <Form.Control
                      required
                      type="text"
                    />
                  </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group controlId="exampleForm.SelectCustom">
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

            <hr />

            <Form.Row>
                  <Form.Group as={Col} md="5" controlId="validationCustom03">
                    <Form.Label>Street Address:</Form.Label>
                    <Form.Control type="text" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Address.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationCustom03">
                    <Form.Label>Apt No:</Form.Label>
                    <Form.Control type="text"  required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
            </Form.Row>


            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>City:</Form.Label>
                <Form.Control type="text"  required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>State:</Form.Label>
                <Form.Control type="text"  required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="2" controlId="validationCustom05">
                <Form.Label>Zip:</Form.Label>
                <Form.Control type="text"  required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
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
            <Form.Group>
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
              />
            </Form.Group>
            <Button className="float-right" type="submit">Save and Continue</Button>
          </Form>
       </Container>
    </div>
  );
}

    
 


export default FormPageOne;
