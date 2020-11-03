import React, { Component } from 'react'
import '../css/taxPayerInfo.css'
import {Form , Button , Col , Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export class FilingStatus extends Component {

   state = {
       Validated : false
   };

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
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (

<div id="z"  className="form-container" >
     <Container> 
       <div id="formLabel" className="text-center"> Taxpayer Information </div>
       <hr />
          <Form noValidate validated={this.state.Validated} onSubmit={this.handleSubmit}>
            <Form.Row>
                  <Form.Group as={Col} md="5" controlId="FirstName">
                    <Form.Label>First name:</Form.Label>
                    <Form.Control
                      required
                      name="firstName"
                      onChange={inputChange('firstName')} 
                      value={values.firstName}
                      type="text"
 
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="MiddleInitial">
                    <Form.Label>Middle Initial:</Form.Label>
                    <Form.Control
                      required
                      name="middleInitial"
                      onChange={inputChange('middleInitial')}
                       value={values.middleInitial}
                      type="text"
                    />
                  </Form.Group>
            </Form.Row>


            <Form.Row>
                  <Form.Group as={Col} md="5" controlId="LastName">
                    <Form.Label>Last name:</Form.Label>
                    <Form.Control
                      required
                      name="lastName"
                      onChange={inputChange('lastName')}
                       value={values.lastName}
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="Occupation">
                    <Form.Label>Occupation:</Form.Label>
                    <Form.Control
                      required
                      name="occupation"
                      onChange={inputChange('occupation')}
                       value={values.occupation}
                      type="text"
                    />
                  </Form.Group>
            </Form.Row>


            <Form.Row>
                  <Form.Group as={Col} md="5" controlId="SocialId">
                    <Form.Label>Social Security Number:</Form.Label>
                    <Form.Control
                      required
                      name="socialId"
                      onChange={inputChange('socialId')}
                       value={values.socialId}
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="Birth">
                    <Form.Label>Date of Birth:</Form.Label>
                    <Form.Control
                      required
                      name="birth"
                      onChange={inputChange('birth')}
                      value={values.birth}
                      type="date"
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
                  <Form.Group as={Col} md="5" controlId="streetAddress">
                    <Form.Label>Street Address:</Form.Label>
                    <Form.Control type="text" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Address.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="Aptno">
                    <Form.Label>Apt No:</Form.Label>
                    <Form.Control type="text"  required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
            </Form.Row>


            <Form.Row>
              <Form.Group as={Col} md="4" controlId="City">
                <Form.Label>City:</Form.Label>
                <Form.Control type="text"  required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="State">
                <Form.Label>State:</Form.Label>
                <Form.Control type="text"  required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="2" controlId="Zip">
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
        )
    }
}

export default FilingStatus
