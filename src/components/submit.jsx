import React, { Component } from 'react';
import {Button, Container, Form } from 'react-bootstrap';
import {ClipLoader} from "react-spinners";
 

//THIS PAGE IS FOR SUBMITING AFTER CONFIRMING THE DATA



export class Submit extends Component {

    state={
        priceLoading: true,
        confirmLoading:true,
        priceShow: false,
        confirmingMsg:false,
        confirmedMsg:false
    }

    /* SPIN FOR TWO SECONDS */
    handleRender = () => {
        setTimeout(()=>{
            this.setState({ priceLoading : false , priceShow:true});
         },2000);
                
    }
    handleRender2 = () => {
        setTimeout(()=>{
            this.setState({ confirmLoading : false , confirmedMsg:true});
         },2000);
                
    }
    confirm = () =>{
        this.setState({confirmingMsg:true});
    }


    render() {
        const {values,inputChange } = this.props;
  
        return (
            <div id="submitDiv" className="form-container">
            <Container style={{width:'100%'}}>
                <div id="formLabel" className="text-center">Last step</div>
                <hr/>
               <Form>
                   {/*  Ask if he want to submit the form */}
                   {values.interested ==='maybe' ? (<div>
                        <Form.Group>
                            <div className="submitYesNoDiv text-center">
                                <label className="submitLabels">Are you interested in an audit insurance for the form we're submitted?</label>
                                <Button id="submitY" value="yes" onClick={inputChange('interested') }>Yes</Button>    
                                <Button id="submitY" value="no" onClick={inputChange('interested') }>No</Button>     
                            </div>
                        </Form.Group>
                   </div>):null}
            
                    {/*   IF PRESSED NO THEN SHOW A MESSAGE  */}
                    { values.interested === 'no' ? (
                     <div className="submitYesNoDiv text-center">
                        <label className="submitLabels">Thank you , hope to see you again soon!</label>
                     </div>
                    ):null }


                     {/*  IF PRESSED YES THEN SHOW THE PRICE AND CONFIRM BUTTON WITH LOADING SPINNER */}
                    { values.interested === 'yes' ? (
                        <div className="submitYesNoDiv text-center">
                            <label className="submitLabels">Do you want to insure this form?</label>
                                     {/* THIS WON'T BE SHOWN UNLESS HE PRESS YES */}
                                    {values.insureBtn === 'yes' ? (
                                        <div>
                                            <div>
                                                {/*  HANDLERENDER IS FUNCTION FOR 2 SEC DELAY FOR THE SPINNER */}
                                                {this.handleRender()}
                                                <ClipLoader
                                                    size={32}
                                                    color={"#706897"}
                                                    loading={this.state.priceLoading}
                                                />
                                            </div>

                                            {this.state.priceShow ===true ? (
                                                    <label  className="submitLabels"> 189$ </label>
                                            ) : null}  


                                            {this.state.confirmingMsg===true ?(
                                                <div>
                                                    {this.handleRender2()}
                                                    <div>
                                                        <ClipLoader
                                                            size={32}
                                                            color={"#706897"}
                                                            loading={this.state.confirmLoading}
                                                        />
                                                    </div>

                                                    {this.state.confirmedMsg===true ?(
                                                        <div>
                                                            <label  style={{color:'green'}} className="submitLabels">Successful Payment!</label>
                                                        </div>
                                                    ):<label  className="submitLabels"> Confirming...</label>}
                                                    
                                                </div>
                                            ):null}

                                         {/* IF STATEMENT IS FOR REMOVING BUTTONS IN THE END */}   
                                         {this.state.confirmedMsg===false ?(
                                             <div>
                                                <Button id="submitY" value="no" onClick={inputChange('insureBtn')}>Cancel</Button>    
                                                <Button id="submitY" value="confirm" onClick={this.confirm} >Confirm</Button> 
                                            </div>
                                         ):null}
                                        </div>
                                    ):
                                        
                                        <div>
                                            <Button id="submitY" value="yes" onClick={inputChange('insureBtn')} >Yes</Button>    
                                            <Button id="submitY" value="no" onClick={inputChange('insureBtn')}>No</Button>
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
