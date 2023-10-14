import React,{useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import {selectedItems} from '../Store/productSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function ViewItems() {
  const {product} = useSelector(selectedItems)
  const [count, setCount] = useState(0);

  const addToCart=()=>{
   setCount(count+1)
   console.log(count)
   
  }
  return (
        <div>
            <h1 className='text-warning'>View Items</h1>
            <Container className='p-5'>
              <Row>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image} />
                  </Card>    
                </Col>
                <Col>
                  <Card style={{ width: '18rem',padding:"40px" }}> 
                     <h3 className='text-left text-secondary'>{product.description}</h3><br/>
                  
                     <ListGroup>
                      <ListGroup.Item className='text-xxl'>ProductName : {product.description}</ListGroup.Item>
                      <ListGroup.Item className='text-xxl'>Price: {product.price}</ListGroup.Item>
                      <ListGroup.Item className='text-xxl'>Discount: {product.discount} %</ListGroup.Item>
                    </ListGroup>
                     <Button variant="primary p-3 mt-3" onClick={addToCart}>Add To Cart</Button>
                  </Card>    
                </Col>
                
              </Row>
            </Container>
      
        </div>
  )
}

export default ViewItems
