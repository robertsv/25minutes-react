import React, { useContext, useState } from 'react';
import TimerContext from '../context/TimerContext';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { minutesToSeconds, secondToMinutes } from '../common/Utils';
import { TimerSatate } from '../common/TimerState';

const SettingsDialog = () => {
  const {
    handleClose,
    getShow,
    setWorkTime,
    setBreakTime,
    getWorkTime,
    getBreakTime,
    setTime,
    setTimerState,
    reset,
  } = useContext(TimerContext);

  const [tmpWorkTime, setTmpWorkTime] = useState(getWorkTime);
  const [tmpBreakTime, setTmpBreakTime] = useState(getBreakTime);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setTmpWorkTime(newValue);
  };

  const handleChange2 = (event) => {
    const newValue = event.target.value;
    setTmpBreakTime(newValue);
  };

  const handleClose2 = () => {
    setTmpWorkTime(getWorkTime());
    setTmpBreakTime(getBreakTime());
    handleClose();
  };

  const handleSave = () => {
    setWorkTime(minutesToSeconds(tmpWorkTime));
    setBreakTime(minutesToSeconds(tmpBreakTime));
    setTime(minutesToSeconds(tmpWorkTime));
    reset();
    handleClose();
  };

  return (
    <Modal size='md' show={getShow()} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Time settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} className='mb-3' controlId='workTime'>
            <Col sm='6'>
              <Form.Label>Work time (minutes)</Form.Label>
            </Col>
            <Col sm='6'>
              <Form.Control
                type='number'
                autoFocus
                value={tmpWorkTime}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='workTime'>
            <Col sm='6'>
              <Form.Label>Break time (minutes)</Form.Label>
            </Col>
            <Col sm='6'>
              <Form.Control
                type='number'
                autoFocus
                value={tmpBreakTime}
                onChange={handleChange2}
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose2}>
          Close
        </Button>
        <Button variant='primary' onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingsDialog;
