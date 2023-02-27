import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

export function AddModal({show,handleClose,drNames}) {
    const handleSubmit=(e)=>{
   e.preventDefault()
    }


  return (
    <>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointmant for {drNames}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Patient Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="datetime">
        <Form.Label>Day&Time</Form.Label>
        <Form.Control type="datetime-local" />
      </Form.Group>
     
     <div className='text-center'>
     <Button variant="success" type="submit" className='me-2'>
        Save
      </Button>
      <Button variant="danger"onClick={handleClose}>
        Close
      </Button>
     </div>
    </Form>
    </Modal.Body>
       
      </Modal>
    </>
  );
}


