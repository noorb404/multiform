import React, { Component } from 'react'
import '../css/taxPayerInfo.css'
import {Form , Button , Col , Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export class FilingStatus extends Component {

   state = {
       Validated : false,
       radio:0
   };


  onCheck = (nr) => () => {
    this.setState({
      radio: nr 
    });
    
    
  }
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
                          <Form.Group  className="taxInput"  as={Col} md="5" controlId="FirstName">
                            <Form.Label className="taxPayerLabels">First name:</Form.Label>
                            <Form.Control
                              required
                              name="firstName"
                              onChange={inputChange('firstName')} 
                              value={values.firstName}
                              type="text"
                              className="taxInput3"
        
                            />
                          </Form.Group>
                          <Form.Group  className="taxInput" as={Col} md="4" controlId="MiddleInitial">
                            <Form.Label className="taxPayerLabels">Middle Initial:</Form.Label>
                            <Form.Control
                              className="taxInput3"
                              name="middleInitial"
                              onChange={inputChange('middleInitial')}
                              value={values.middleInitial}
                              type="text"
                            />
                          </Form.Group>
                    </Form.Row>


                    <Form.Row>
                          <Form.Group className="taxInput" as={Col} md="5" controlId="LastName">
                            <Form.Label className="taxPayerLabels">Last name:</Form.Label>
                            <Form.Control
                              required
                              className="taxInput3"
                              name="lastName"
                              onChange={inputChange('lastName')}
                              value={values.lastName}
                              type="text"
                            />
                          </Form.Group>
                          <Form.Group className="taxInput" as={Col} md="4" controlId="Occupation">
                            <Form.Label className="taxPayerLabels">Occupation:</Form.Label>
                            <Form.Control
                              required
                              className="taxInput3"
                              name="occupation"
                              onChange={inputChange('occupation')}
                              value={values.occupation}
                              type="text"
                            />
                          </Form.Group>
                    </Form.Row>


                    <Form.Row>
                          <Form.Group className="taxInput" as={Col} md="5" controlId="SocialId">
                            <Form.Label className="taxPayerLabels">Social Security Number:</Form.Label>
                            <Form.Control
                              required
                              className="taxInput3"
                              name="socialId"
                              onChange={inputChange('socialId')}
                              value={values.socialId}
                              type="text"
                            />
                          </Form.Group>
                          <Form.Group className="taxInput" as={Col} md="4" controlId="Birth">
                            <Form.Label className="taxPayerLabels">Date of Birth:</Form.Label>
                            <Form.Control
                              required
                              className="taxInput3"
                              name="birth"
                              onChange={inputChange('birth')}
                              value={values.birth}
                              type="date"
                            />
                          </Form.Group>
                    </Form.Row>

              
                        <Form.Group className="taxInput2" controlId="exampleForm.SelectCustom">
                          <Form.Label className="taxPayerLabels">Jr., Sr., III:</Form.Label>
                          <Form.Control as="select" custom>
                            <option disabled selected></option>
                            <option>JR</option>
                            <option>SR</option>
                            <option>II</option>
                            <option>III</option>
                            <option>IV</option>
                            <option>V</option>
                            <option>VI</option>
                          </Form.Control>
                        </Form.Group>
         

                    <hr />

                    <Form.Row>
                          <Form.Group className="taxInput" as={Col} md="5" controlId="streetAddress">
                            <Form.Label className="taxPayerLabels">Street Address:</Form.Label>
                            <Form.Control
                             type="text"
                             className="taxInput3"
                              required
                              name="streetAddress"
                              onChange={inputChange('streetAddress')}
                              value={values.streetAddress}
                               />
                          </Form.Group>

                          <Form.Group className="taxInput" as={Col} md="4" controlId="Aptno">
                            <Form.Label className="taxPayerLabels">Apt No:</Form.Label>
                            <Form.Control 
                              type="number"            
                              name="aptNo"
                              className="taxInput3"
                              onChange={inputChange('aptNo')}
                              value={values.aptNo}
                              />
                          </Form.Group>
                    </Form.Row>


                    <Form.Row>
                      <Form.Group className="taxInput" as={Col} md="4" controlId="City">
                        <Form.Label className="taxPayerLabels">City:</Form.Label>
                        <Form.Control 
                          type="text"
                          className="taxInput3"
                          required 
                          name="city"
                          onChange={inputChange('city')}
                          value={values.city}
                          />
                      </Form.Group>

                      <Form.Group className="taxInput" as={Col} md="3" controlId="State">
                        <Form.Label className="taxPayerLabels">State:</Form.Label>
                        <Form.Control 
                          type="text"
                          required
                          className="taxInput3"
                          name="state"
                          onChange={inputChange('state')}
                          value={values.state}
                          />

                      </Form.Group>

                      <Form.Group className="taxInput" as={Col} md="2" controlId="Zip">
                        <Form.Label className="taxPayerLabels">Zip:</Form.Label>
                        <Form.Control 
                          type="text"
                          required
                          className="taxInput"
                          name="zip"
                          onChange={inputChange('zip')}
                          value={values.zip}
                          />

                      </Form.Group>

                    </Form.Row>
                    <hr />


                  <Form.Row>
                 
                  <div id="checkLabel">
                           Can a parent (or somebody else) claim you as a dependent on their tax return?
                  </div>
                  <div id="checkLabelTop">
                      <label id="yesNo">
                        <input 
                                  type="radio"
                                  id="yes"
                                  label="yes"
                                />
                                Yes
                      </label>
                      <label id="yesNo">
                        <input 
                                  type="radio"
                                  id="no"
                                  label="no"
                                />
                                No
                      </label>
                  </div>
                  </Form.Row>

                  <hr/>

                  
                  <Form.Row>
                  
                  <div id="checkLabel">
                  Do you want to contribute $3 to the Presidential Election Campaign Fund?
                  </div>
                  <div id="checkLabelTop">
                      <label id="yesNo">
                        <input 
                                  type="radio"
                                  id="yes"
                                  label="yes"
                                />
                                Yes
                      </label>
                      <label id="yesNo">
                        <input 
                                  type="radio"
                                  id="no"
                                  label="no"
                                />
                                No
                      </label>
                  </div>
                  
                  </Form.Row>

                  <hr/>
                  <Form.Row>
                  
                  <div id="checkLabel">
                        Is this person legally blind?
                  </div>
                  
                  <div id="checkLabelTop">
                      <label id="yesNo">
                        <input 
                                  type="radio"
                                  id="yes"
                                  label="yes"
                                />
                                Yes
                      </label>
                      <label id="yesNo">
                        <input 
                                  type="radio"
                                  id="no"
                                  label="no"
                                />
                                No
                      </label>
                  </div>
                  </Form.Row>

                  <hr/>
                  <Form.Row>
                  
                  <div id="checkLabel">
                  Has this person passed away before the filing of this tax return?
                  </div>
                  <div id="checkLabelTop">
                      <label id="yesNo">
                        <input 
                                  type="radio"
                                  id="yes"
                                  label="yes"
                                />
                                Yes
                      </label>
                      <label id="yesNo">
                        <input 
                                  type="radio"
                                  id="no"
                                  label="no"
                                />
                                No
                      </label>
                  </div>
                  
                  </Form.Row>

                  <hr/>
                  <Form.Row>
                 
                  <div id="checkLabel">
                        Were you impacted by a qualified disaster in 2019?
                  </div>
                  <div id="checkLabelTop">
                      <label id="yesNo">
                        <input 
                                  type="radio"
                                  id="yes"
                                  label="yes"
                                />
                                Yes
                      </label>
                      <label id="yesNo">
                        <input 
                                  type="radio"
                                  id="no"
                                  label="no"
                                />
                                No
                      </label>
                  </div>
                  
                  </Form.Row>
                    <hr />
                    <Form.Group>
                      <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                      />
                    </Form.Group>
                    <Button className="float-right"  id="nextBtn" type="submit">Save and Continue</Button>
                    <Button className="float-left" id="backBtn" onClick={this.back}>Previous Page</Button>
                  </Form>
                </Container>
            </div>
        )
    }
}

export default FilingStatus
