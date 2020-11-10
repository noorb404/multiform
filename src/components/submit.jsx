import React, { Component } from 'react';
import {Button, Container, Form } from 'react-bootstrap';
import {ClipLoader,RingLoader} from "react-spinners";
 


export class Submit extends Component {

    state={
        loading: true,
        priceShow: false
    }


    handleRender = () => {
      
        setTimeout(() =>{
            this.props.values.insureBtn='yes';
        },0);
        setTimeout(()=>{
            this.setState({ loading : false , priceShow:true});
         },3000);        
    }


    render() {
        const {values,inputChange } = this.props;
  
        return (
            <div  id="chooseDiv" className="form-container">
            <Container style={{width:'100%'}}>
                <div id="formLabel" className="text-center">Submit</div>
                <hr/>

               <Form>
                   {values.interested ==='maybe' ? (<div>
                        <Form.Group>
                            <div className="submitYesNoDiv text-center">
                                <label className="submitLabels">Are you interested in an audit insurance for the form we're submitted?</label>
                                <Button id="submitY" value="yes" onClick={inputChange('interested') }>Yes</Button>    
                                <Button id="submitY" value="no" onClick={inputChange('interested') }>No</Button>     
                            </div>
                        </Form.Group>
                   </div>):null}
            

                    { values.interested === 'no' ? (
                     <div className="submitYesNoDiv text-center">
                       
                        <label className="submitLabels">Thank you , hope to see you soon!</label>
                     </div>
                    ):null }



                    { values.interested === 'yes' ? (
                        <div className="submitYesNoDiv text-center">
                            
                            <label className="submitLabels">Do you want to insure this form?</label>
                            {values.insureBtn === 'yes' ? (
                                <div>
                                    <div>
                                        <ClipLoader
                                            size={32}
                                            color={"#706897"}
                                            loading={this.state.loading}
                                        />
                                    </div>
                                   {this.state.priceShow ===true ? (
                                        <label className="submitLabels"> 189$ </label>
                                   ) : null}  
                                    <Button id="submitY" value="no" onClick={inputChange('insureBtn') }>Cancel</Button>    
                                    <Button id="submitY" value="no" >Confirm</Button> 
                              </div>
                            ):
                            <div>
                                <Button id="submitY" value="yes" onClick={this.handleRender()} >Yes</Button>    
                                <Button id="submitY" value="yes" onClick={inputChange('insureBtn') }>No</Button>
                            </div>
                            }
                          
                        </div>
                     ) : null }
                
                   
                
                </Form>
            </Container>
            </div>
        )
    }
}

export default Submit
