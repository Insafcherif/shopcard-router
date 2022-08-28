import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'


function CardComponent({ product, user }) {
  const Navigate = useNavigate()
  const handleNavigate = () => {
    if (!user.connect) {
      if (window.confirm("You should connect before")) {
        Navigate("/SignIn")
      }
    }
    if (user.connect) {
      Navigate(`/list/${product.id}`)
    }
  }

  return (
    <Card style={{
      width: '18rem', boxShadow: '1px 2px 9px gray',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
      width: "250px",
    }}>
      <Card.Img variant="top" src={product.image} alt={product.name} width="100px" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Button variant="primary" onClick={handleNavigate}>See details</Button>
      </Card.Body>
    </Card>
  )
}

export default CardComponent