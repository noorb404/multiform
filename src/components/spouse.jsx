import React, { Component } from 'react'
import '../css/taxPayerInfo.css'
import {Form , Button , Col , Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export class Spouse extends Component {

   state = {
    Validated : false,
    radio1:0,
    radio2:0,
    radio3:0,
    radio4:0,
    radio5:0,

    };


  onCheck1 = (nr) => () => {
    this.setState({
      [nr]: 1 
    });
  }
    onCheck2 = (nr) => () => {
    this.setState({
      [nr]: 0
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

          <div id="spouseDiv"  className="form-container">
            <Container> 
              <div id="formLabel" className="text-center"> Spouse Information </div>
              <hr />
                  <Form noValidate validated={this.state.Validated} onSubmit={this.handleSubmit}>
                  <Form.Row>
                          <Form.Group className="taxInput" as={Col} md="5" controlId="spouseFirstName">
                            <Form.Label className="taxPayerLabels">First name:</Form.Label>
                            <Form.Control
                              required
                              className="taxInput3"
                              name="spouseFirstName"
                              onChange={inputChange('spouseFirstName')} 
                              value={values.spouseFirstName}
                              type="text"
        
                            />
                          </Form.Group>
                          <Form.Group className="taxInput" as={Col} md="4" controlId="spouseMiddleInitial">
                            <Form.Label className="taxPayerLabels">Middle Initial:</Form.Label>
                            <Form.Control
                              className="taxInput3"
                              name="spouseMiddleInitial"
                              onChange={inputChange('spouseMiddleInitial')}
                              value={values.spouseMiddleInitial}
                              type="text"
                            />
                          </Form.Group>
                    </Form.Row>


                    <Form.Row>
                          <Form.Group className="taxInput" as={Col} md="5" controlId="spouseLastName">
                            <Form.Label className="taxPayerLabels">Last name:</Form.Label>
                            <Form.Control
                              required
                              name="spouseLastName"
                              onChange={inputChange('spouseLastName')}
                              value={values.spouseLastName}
                              type="text"
                              className="taxInput3"
                            />
                          </Form.Group>
                          <Form.Group className="taxInput" as={Col} md="4" controlId="spouseBirth">
                            <Form.Label className="taxPayerLabels">Date of Birth:</Form.Label>
                            <Form.Control
                              required
                              name="spouseBirth"
                              onChange={inputChange('spouseBirth')}
                              value={values.spouseBirth}
                              type="date"
                              className="taxInput3"
                            />
                          </Form.Group>
                      
                         
                    </Form.Row>


                    <Form.Row>
                          <Form.Group className="taxInput" as={Col} md="5" controlId="spouseSocialId">
                            <Form.Label className="taxPayerLabels">Social Security Number:</Form.Label>
                            <Form.Control
                              required
                              name="spouseSocialId"
                              onChange={inputChange('spouseSocialId')}
                              value={values.spouseSocialId}
                              type="text"
                              className="taxInput3"
                            />
                          </Form.Group>
                          <Form.Group  className="taxInput2" as={Col} md="4">
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
                                 onClick={this.onCheck1("radio1")}
                                 checked={this.state.radio1===1 ? true : false}
                               />
                               Yes
                     </label>
                     <label id="yesNo">
                       <input 
                                 type="radio"
                                 id="no"
                                 onClick={this.onCheck2("radio1")}
                                 checked={this.state.radio1===0 ? true : false}
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
                                 onClick={this.onCheck1("radio2")}
                                 checked={this.state.radio2===1 ? true : false}
                               />
                               Yes
                     </label>
                     <label id="yesNo">
                       <input 
                                 type="radio"
                                 id="no"
                                 onClick={this.onCheck2("radio2")}
                                 checked={this.state.radio2===0 ? true : false}
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
                                 onClick={this.onCheck1("radio3")}
                                 checked={this.state.radio3===1 ? true : false}
                               />
                               Yes
                     </label>
                     <label id="yesNo">
                       <input 
                                 type="radio"
                                 id="no"
                                 onClick={this.onCheck2("radio3")}
                                 checked={this.state.radio3===0 ? true : false}
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
                                 onClick={this.onCheck1("radio4")}
                                 checked={this.state.radio4===1 ? true : false}
                               />
                               Yes
                     </label>
                     <label id="yesNo">
                       <input 
                                 type="radio"
                                 id="no"
                                 onClick={this.onCheck2("radio4")}
                                 checked={this.state.radio4===0 ? true : false}
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
                                 onClick={this.onCheck1("radio5")}
                                 checked={this.state.radio5===1 ? true : false}
                               />
                               Yes
                     </label>
                     <label id="yesNo">
                       <input 
                                 type="radio"
                                 id="no"
                                 onClick={this.onCheck2("radio5")}
                                 checked={this.state.radio5===0 ? true : false}
                               />
                               No
                     </label>
                 </div>
                 
             </Form.Row>

                    <hr />
                  
                    <Button   id="nextBtn" type="submit">Save and Continue</Button>
                    <Button  id="backBtn" onClick={this.back}>Cancel</Button>
                  </Form>
                </Container>
            </div>
        )
    }
}

export default Spouse
