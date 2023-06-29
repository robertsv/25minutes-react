import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import Timer from './components/Timer';
import StartStopButton from './components/StartStopButton';
import TimerContext, { TimerProvider } from './context/TimerContext';
import SettingsDialog from './components/SettingsDialog';
import { useContext, useEffect } from 'react';
import NotificationService from './common/NotificationService';

function App() {
  const { handleShow } = useContext(TimerContext);

  return (
    <>
      {/* <TimerProvider> */}
      {/* TODO (RV): decrease container width */}
      <Container>
        <Row className='mt-4'>
          <Col xs={12}>
            <Timer></Timer>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col xs={12}>
            <div className='float-start'>
              <span className='countdown__about-link'>About</span>
            </div>
            <div className='float-end'>
              <Button variant='outline-info' onClick={handleShow}>
                Settings
              </Button>
            </div>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col className='offset-sm-3 col-sm-6 d-grid'>
            <StartStopButton></StartStopButton>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <hr></hr>
        <Row className='justify-content-md-center'>
          <Col lg='6'>
            <h4>What is it?</h4>
            <p>
              25minutes is a simple yet very powerful time tracking tool. It is
              based on{' '}
              <a
                className='link'
                href='https://en.wikipedia.org/wiki/Pomodoro_Technique'
                target='_blank'
                class='link'
              >
                The Pomodoro Technique
              </a>
              . The idea is simple - you work for the given time (25 or 45 or
              any other time that fits you) then you take a break and after the
              break you start again to work.
            </p>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col lg='6'>
            <h4>How to use it?</h4>
            <p>
              By default, work time is 25 minutes and the break is 5 minutes. In
              settings, you can change it. After each session (work and break
              session) there is a notification. The next session starts
              automatically but you can pause it or restart.
            </p>
          </Col>
        </Row>
      </Container>

      <SettingsDialog></SettingsDialog>
      {/* </TimerProvider> */}
    </>
  );
}

function AppWrapper() {
  return (
    <TimerProvider>
      <App />
    </TimerProvider>
  );
}

export default AppWrapper;

// export default App;
