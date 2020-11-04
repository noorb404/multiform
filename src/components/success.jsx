import React, { Component } from 'react'
import { Container ,Form } from 'react-bootstrap'

export class Success extends Component {
    render() {
        return (
                <Container className="form-container">
                    <Form>
                        <h1>Successfull Page!</h1>
                    </Form>
                </Container>
        )
    }
}

export default Success
