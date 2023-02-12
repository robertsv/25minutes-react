import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  return (
    <>
      {/* TODO (RV): decrease container width */}
      <Container>
        <Row className='mt-4'>
          <Col xs={12}>
            <div
              className='countdown__timer'
              /* [ngClass]="{'countdown__timer--work': mode === 0, 'countdown__timer--break': mode === 1}"> */
              /* {{ timeLeft | minutesSeconds }} */
            >
              15:57
            </div>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col xs={12}>
            <div className='float-start'>
              <span className='countdown__about-link'>About</span>
            </div>
            <div className='float-end'>
              <Button variant='outline-info'>Settings</Button>
            </div>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col className='offset-sm-3 col-sm-6 d-grid'>
            <Button variant='danger' size='lg'>
              Start work
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
