import React from 'react';
import { Button, Container, Form, Col, Row } from 'react-bootstrap';



//FIRST PAGE



const Choose = props => {

    const hiddenFileInput = React.useRef(null);

    const onContinue = e => {
        props.nextStep();
    };
    const onChangeHandler = e => {
        props.fileUpload();
    };
    const handleClick = event => {
        hiddenFileInput.current.click();
    };



    return (
        <div id="chooseDiv" className="form-container">
            <Container style={{ width: '100%' }} fluid="sm">
                <div id="formLabel" className="text-center">Hi There!</div>
                <div id="formSubLabel" className="text-center">We're filing a tax form, yayy!! i'd explain it to you but i don't really know what i'm doing.. all i know is we have two ways to go about it</div>
                <hr />
                <Form>
                    <Row>
                        <Col xs={12} md={5} className="text-center">
                            <Form.Group>
                                <Button className="manuallyBtn" style={{float:"right"}} variant="outline-success" size="lg" onClick={handleClick}>
                                    Upload last year's report
                                </Button>
                                    <input
                                        type="file"
                                        ref={hiddenFileInput}
                                        onChange={onChangeHandler}
                                        style={{ display: 'none' }}
                                    />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={2} className="text-center"><Button className="manuallyBtn transparent" onClick={() => {}}>OR</Button></Col>
                        <Col xs={12} md={5} className="text-center">
                            <Form.Group>
                                <Button className="manuallyBtn" style={{float:"left"}} variant="outline-info" size="lg" onClick={onContinue}>Fill your information manually</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )

}

export default Choose
