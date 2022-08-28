import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
const styleForm = { width: "500px", margin: "auto", marginTop: '80px' }

function SignIn({ setUser, user }) {
  const Navigate = useNavigate()
  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
const handleSubmit=(e)=> {
  e.preventDefault()
  setUser({ ...user, connect: true });
  Navigate("/Profil")
}
  
  return (
    <Form style={styleForm} on onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        onChange={handlechange} 
        type="email" 
        placeholder="Enter email"
        name="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        onChange={handlechange} 
        type="text" 
        placeholder="Name" 
        name="name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        onChange={handlechange} 
        type="password" placeholder="Password" 
        name="password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default SignIn;