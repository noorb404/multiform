import React, { Component } from 'react'
import '../css/taxPayerInfo.css'
import {Form , Button , Col , Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export class Dependent extends Component {

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

          <div id="dependentDiv"  className="form-container">
            <Container> 
              <div id="formLabel" className="text-center"> Dependent Information </div>
              <hr />
                  <Form noValidate validated={this.state.Validated} onSubmit={this.handleSubmit}>
                    <Form.Row>
                          <Form.Group className="taxInput" as={Col} md="5" controlId="DependentFirstName">
                            <Form.Label className="taxPayerLabels">First name:</Form.Label>
                            <Form.Control
                              required
                              className="taxInput3"
                              name="dependentFirstName"
                              onChange={inputChange('dependentFirstName')} 
                              value={values.dependentFirstName}
                              type="text"
        
                            />
                          </Form.Group>
                          <Form.Group className="taxInput" as={Col} md="4" controlId="DependentMiddleInitial">
                            <Form.Label className="taxPayerLabels">Middle Initial:</Form.Label>
                            <Form.Control
                              className="taxInput3"
                              name="dependentMiddleInitial"
                              onChange={inputChange('dependentMiddleInitial')}
                              value={values.dependentMiddleInitial}
                              type="text"
                            />
                          </Form.Group>
                    </Form.Row>

                    <Form.Row>
                             <Form.Group className="taxInput" as={Col} md="5" controlId="DependentLastName">
                                <Form.Label className="taxPayerLabels">Last name:</Form.Label>
                                <Form.Control
                                  required
                                  className="taxInput3"
                                  name="dependentLastName"
                                  onChange={inputChange('dependentLastName')}
                                  value={values.dependentLastName}
                                  type="text"
                                />
                              </Form.Group>
                              <Form.Group className="taxInput" as={Col} md="4" controlId="DependentBirth">
                                <Form.Label className="taxPayerLabels">Date of Birth:</Form.Label>
                                <Form.Control
                                  required
                                  className="taxInput3"
                                  name="dependentBirth"
                                  onChange={inputChange('dependentBirth')}
                                  value={values.dependentBirth}
                                  type="date"
                                />
                              </Form.Group>
                    </Form.Row>


                    <Form.Row> 
                          <Form.Group className="taxInput" as={Col} md="5" controlId="DependentSocialId">
                            <Form.Label className="taxPayerLabels">Social Security Number:</Form.Label>
                            <Form.Control
                              className="taxInput3"
                              required
                              name="dependentSocialId"
                              onChange={inputChange('dependentSocialId')}
                              value={values.dependentSocialId}
                              type="text"
                            />
                          </Form.Group>
                    </Form.Row>


                    <Form.Row>
                    <Form.Group className="taxInput2"  as={Col} md="4">
                            <Form.Label className="taxPayerLabels">Jr., Sr., III:</Form.Label>
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
                    <Form.Group className="taxInput2" as={Col} md="4">
                            <Form.Label className="taxPayerLabels">Relationship to Taxpayer:</Form.Label>
                            <Form.Control as="select" custom>
                                <option disabled selected>Choose an option</option>
                                <option>SON</option>
                                <option>DAUGHTER</option>
                                <option>STEP CHILD</option>
                                <option>FOSTER CHILD</option>
                                <option>GRANDCHILD</option>
                                <option>GRANDPARENT</option>
                                <option>PARENT OR IN-LAW</option>
                                <option>BROTHER</option>
                                <option>HALF BROTHER</option>
                                <option>STEPBROTHER</option>
                                <option>SISTER</option>
                                <option>HALF SISTER</option>
                                <option>STEPSISTER</option>
                                <option>UNCLE</option>
                                <option>AUNT</option>
                                <option>NEPHEW</option>
                                <option>NIECE</option>
                                <option>OTHER</option>               
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <hr />

                    <Button id="nextBtn" type="submit">Save and Continue</Button>
                    <Button id="backBtn" onClick={this.back}>Cancel</Button>
                  </Form>
                </Container>
            </div>
        )
    }
}

export default Dependent
