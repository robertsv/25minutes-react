import React, { useContext, useState } from 'react';
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
    alert(event.target.value);
    if (/^\d*$/.test(event.target.value)) {
      alert('Value is numeric');
      setTmpWorkTime(event.target.value);
    }
  };

  // Event handler for changes in break time input
  const handleBreakTimeChange = (event) => {
    if (/^\d*$/.test(event.target.value)) {
      setTmpBreakTime(event.target.value);
    }
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

  const handleKeyPress = (event) => {
    // Allow only numeric keys and certain control keys
    const allowedKeys = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'Backspace',
      'Delete',
      'Tab',
    ];
    console.log(event.key);
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <Modal size='md' show={getShow()} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Time settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} className='mb-3' controlId='workTime'>
            <Col sm={6}>
              <Form.Label>Work time (minutes)</Form.Label>
            </Col>
            <Col sm={6}>
              <Form.Control
                type='number'
                autoFocus
                value={tmpWorkTime}
                onChange={handleWorkTimeChange}
                onKeyDown={handleKeyPress}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='workTime'>
            <Col sm={6}>
              <Form.Label>Break time (minutes)</Form.Label>
            </Col>
            <Col sm={6}>
              <Form.Control
                type='number'
                value={tmpBreakTime}
                onChange={handleBreakTimeChange}
                onKeyDown={handleKeyPress}
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
