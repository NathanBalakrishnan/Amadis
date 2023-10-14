import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { selectedItems } from '../Store/productSlice';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
function AddToCart() {

    const dispatch = useDispatch();
    const { product } = useSelector(selectedItems);
  return (
    <div>
        <h1>Item summary</h1>
     
        <input type='text' placeholder='Discount Code' className='p-2'/>
        <Button variant='primary pt-1 ml-2'>Apply</Button>
        
      <Container className='p-5'>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src={product.image} />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', padding: '40px' }}>
              <h3 className='text-left text-secondary'>{product.description}</h3>
              <br />

              <ListGroup>
                <ListGroup.Item className='text-xxl'>ProductName : {product.description}</ListGroup.Item>
                <ListGroup.Item className='text-xxl'>Price: {product.price}</ListGroup.Item>
                <ListGroup.Item className='text-xxl'>Discount: {product.discount} %</ListGroup.Item>
                <ListGroup.Item className='text-xxl'>Total: {product.price}</ListGroup.Item>
              </ListGroup>
              <Button variant='primary p-3 mt-3'>
                Proceed to pay
              </Button>
            
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    )
    }

export default AddToCart
