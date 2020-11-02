
import './App.css';
import FormPageOne from './FormOne';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Container} from 'react-bootstrap';




function App() {
  return (
    <div className="App">
      <Container>
        <Row >
          <Col xs={1}></Col>
          <Col> <FormPageOne /> </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
