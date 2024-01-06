import React from 'react'
import { Form } from 'react-bootstrap'

const Forms = ({type}) => {
  return (
    <Form.Group className="mb-3" controlId="formGroupId">
        <Form.Label>{type}</Form.Label>
        <Form.Control type={type} placeholder={`Enter your ${type}`} />
    </Form.Group>
  )
}

export default Forms
