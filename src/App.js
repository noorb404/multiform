
import './App.css';
import './css/main.css'
import Form from './components/form'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';


function App() {
  return (
      <Container className="p-4">
         <Form /> 
      </Container>
  );
}

export default App;
