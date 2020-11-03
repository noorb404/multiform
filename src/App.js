
import './App.css';
import TaxPayerInfo from './components/taxPayerInfo';
import Form from './components/form'

import {Col ,Row , Container} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Container className="p-4">
        <Row >
          <Col xs={1}></Col>
          <Col> <Form /> </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
