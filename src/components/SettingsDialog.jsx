import React, { useContext, useEffect, useState } from 'react';
import TimerContext from '../context/TimerContext';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { minutesToSeconds, secondToMinutes } from '../common/Utils';
import StorageService from '../common/StorageService';

const SettingsDialog = () => {
  // Accessing necessary functions and state from the TimerContext
  const {
    handleClose,
    getShow,
    setWorkTime,
    setBreakTime,
    getWorkTime,
    getBreakTime,
    setTime,
    reset,
  } = useContext(TimerContext);

  // State for temporary work time and break time values
  const [tmpWorkTime, setTmpWorkTime] = useState(
    secondToMinutes(getWorkTime())
  );
  const [tmpBreakTime, setTmpBreakTime] = useState(
    secondToMinutes(getBreakTime())
  );

  // Event handler for changes in work time input
  const handleWorkTimeChange = (event) => {
    const newValue = event.target.value;
    setTmpWorkTime(newValue);
  };

  // Event handler for changes in break time input
  const handleBreakTimeChange = (event) => {
    const newValue = event.target.value;
    setTmpBreakTime(newValue);
  };

  // Function to close the dialog and revert temporary values
  const closeDialog = () => {
    setTmpWorkTime(secondToMinutes(getWorkTime()));
    setTmpBreakTime(secondToMinutes(getBreakTime()));
    handleClose();
  };

  // Function to save changes to work time and break time
  const saveChanges = () => {
    // Saving changes to storage service
    StorageService.setWorkTime(minutesToSeconds(tmpWorkTime));
    StorageService.setBreakTime(minutesToSeconds(tmpBreakTime));

    // Updating state with new values
    setWorkTime(minutesToSeconds(tmpWorkTime));
    setBreakTime(minutesToSeconds(tmpBreakTime));
    setTime(minutesToSeconds(tmpWorkTime));

    // Resetting the timer
    reset();

    // Closing the dialog
    handleClose();
  };

  return (
    <Modal size='md' show={getShow()} onHide={closeDialog}>
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
                onChange={handleWorkTimeChange}
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
                onChange={handleBreakTimeChange}
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={closeDialog}>
          Close
        </Button>
        <Button variant='primary' onClick={saveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingsDialog;
